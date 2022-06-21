const getUsers = (_req, res) => {
  return res.json({
    message: 'Users found successfully',
    users: [
      {
        name: 'Gonzalo',
        role: 'Mentor',
      },
      {
        name: 'Florencia',
        role: 'Tutor',
      },
      {
        name: 'Axel',
        role: 'alumno',
      },
      {
        name: 'Fede',
        role: 'Nadia',
      },
      {
        name: 'Nadia',
        role: 'alumno',
      },
      {
        name: 'Pablo',
        role: 'alumno',
      },
      {
        name: 'Tomas',
        role: 'alumno',
      },
      {
        name: 'Joana',
        role: 'alumno',
      },
      {
        name: 'Ignacio',
        role: 'alumno',
      }
    ],
  })
};

const getUserById = (req, res) => {
  const { id } = req;
  return res.json({
    message: 'Users updated successfully',
    id,
  });
}

const createUser = (req, res) => {
  const payload = req.body;
  return res.status(201).json({
    message: 'User is created',
    payload,
  })
}

export {
  getUsers,
  getUserById,
  createUser,
}
