/**
 * STEP 29: ReturnType Utility Type
 * این ابزار برای استخراج نوع خروجی یک تابع استفاده می‌شود.
 */

// ۱. تعریف یک تابع نمونه
function getUserInfo(id: number) {
  return {
    id,
    name: "Alireza",
    role: "Developer",
    isActive: true,
  };
}

// ۲. استخراج نوع خروجی تابع با استفاده از ReturnType
type UserInfo = ReturnType<typeof getUserInfo>;

// ۳. استفاده از نوع استخراج شده
const user: UserInfo = {
  id: 1,
  name: "Alireza Naseri",
  role: "Developer",
  isActive: true
};

console.log("Step 29: ReturnType utility verified.");
console.log("User Info:", user);
