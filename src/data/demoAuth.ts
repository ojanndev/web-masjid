// Demo accounts for testing
export const demoAccounts = {
  admin: {
    username: "admin@masjid.com",
    password: "Admin123!",
    role: "admin"
  },
  staff: {
    username: "staff@masjid.com",
    password: "Staff123!",
    role: "staff"
  }
};

// Temporary authentication function for demo
export const authenticateDemo = (username: string, password: string) => {
  const admin = demoAccounts.admin;
  const staff = demoAccounts.staff;

  if (username === admin.username && password === admin.password) {
    return {
      success: true,
      user: { ...admin },
      token: "demo-admin-token"
    };
  }

  if (username === staff.username && password === staff.password) {
    return {
      success: true,
      user: { ...staff },
      token: "demo-staff-token"
    };
  }

  return {
    success: false,
    message: "Invalid credentials"
  };
};