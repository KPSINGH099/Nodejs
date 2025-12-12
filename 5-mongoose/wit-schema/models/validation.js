const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // 1. Required
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [50, "Name must not exceed 50 characters"]
    },

    // 2. Unique + Regex
    // unique: true,
    email: {
      type: String,
      required: [true, "Email is required"],
     
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },

    // 3. Number limits
    age: {
      type: Number,
      min: [18, "Age must be at least 18"],
      max: [60, "Age must be below 60"]
    },

    // 4. Enum
    role: {
      type: String,
      enum: {
        values: ["admin", "user", "guest"],
        message: "{VALUE} is not a valid role"
      },
      default: "user"
    },

    // 5. Custom validator
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: function (v) {
          return v.length >= 6;
        },
        message: "Password must be at least 6 characters"
      }
    },

    // 6. Array validator (e.g., tags)
    tags: {
      type: [String],
      validate: {
        validator: function (arr) {
          return arr.length <= 5;
        },
        message: "You can add maximum 5 tags"
      }
    },

    // 7. Conditional required
    discount: {
      type: Number,
      required: function () {
        return this.isPremium === true;
      },
       validate: {
        validator: function () {
          return this.isPremium === true;
        },
        message: "Not premium user, cannot set discount"
      }
    },

    // 8. Boolean for conditional validation
    isPremium: {
      type: Boolean,
      default: false
    },

    // 9. Async validator (check email exists)
    mobile: {
      type: String,
      validate: {
        validator: async function (value) {
          if (!value) return true;
          const exists = await mongoose
            .model("User")
            .findOne({ mobile: value });
          return !exists;
        },
        message: "Mobile number already exists"
      }
    },

    // 10. Default + Enum
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
