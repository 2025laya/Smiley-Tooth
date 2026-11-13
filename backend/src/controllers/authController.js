const User = require('../models/User');

// 1. إنشاء حساب جديد (مريض أو طبيب)
const register = async (req, res) => {
  try {
    const { fullName, email, password, role, experienceYears, education, workplace, conferences, certificates, bio, profileImage } = req.body;

    // التحقق هل الإيميل مستخدم مسبقاً
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'البريد الإلكتروني مستخدم مسبقاً' });
    }

    // تجهيز بيانات المستخدم الجديد
    const userData = {
      fullName,
      email,
      password, // ملاحظة: سنقوم بتشفيرها لاحقاً بـ bcrypt لزيادة الأمان
      role: role || 'patient',
    };

    // إذا كان المستخدم طبيباً، نضيف حقول الـ CV والصورة
    if (role === 'doctor') {
      userData.experienceYears = experienceYears || 0;
      userData.education = education;
      userData.workplace = workplace;
      userData.conferences = conferences || [];
      userData.certificates = certificates || [];
      userData.bio = bio;
      userData.profileImage = profileImage;
    }

    const newUser = await User.create(userData);

    res.status(201).json({
      success: true,
      message: 'تم إنشاء الحساب بنجاح',
      data: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'خطأ في الخادم', error: error.message });
  }
};

// 2. تسجيل الدخول
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // البحث عن المستخدم بالإيميل
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'المستخدم غير موجود' });
    }

    // مطابقة كلمة السر (مؤقتاً بدون تشفير لحين ربط الـ bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'كلمة السر غير صحيحة' });
    }

    res.status(200).json({
      success: true,
      message: 'تم تسجيل الدخول بنجاح',
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'خطأ في الخادم', error: error.message });
  }
};

module.exports = {
  register,
  login,
};