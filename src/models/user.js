const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'يرجى إدخال الاسم الكامل'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'يرجى إدخال البريد الإلكتروني'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'يرجى إدخال كلمة السر'],
      minlength: [6, 'كلمة السر يجب أن تكون 6 احرف على الأقل'],
    },
    role: {
      type: String,
      enum: ['patient', 'doctor'],
      default: 'patient',
    },
    phone: {
      type: String,
      trim: true,
    },

    // ==========================================
    // حقول خاصة بالطبيب فقط (Doctor Profile & CV)
    // ==========================================
    experienceYears: {
      type: Number,
      default: 0,
    },
    education: {
      type: String, // مكان الدراسة والشهادات
      trim: true,
    },
    workplace: {
      type: String, // مكان العيادة الحالية أو المستشفى
      trim: true,
    },
    conferences: {
      type: [String], // قائمة بالمؤتمرات
      default: [],
    },
    certificates: {
      type: [String], // قائمة بشهادات الخبرة
      default: [],
    },
    bio: {
      type: String, // نبذة عن الطبيب
      trim: true,
    },
    profileImage: {
      type: String, // رابط صورة الطبيب
      default: null,
    },
  },
  {
    timestamps: true, // يضيف تلقائياً وقت إنشاء الحساب وتحديثه (createdAt, updatedAt)
  }
);

module.exports = mongoose.model('User', userSchema);