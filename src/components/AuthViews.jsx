import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export function AuthPanel({ user, setUser }) {
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="p-4 text-center">
      <p className="mb-2">👋 Bienvenido {user.email}</p>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-xl shadow">
        Cerrar sesión
      </button>
    </div>
  );
}

export function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (err) {
      setError("Credenciales inválidas o usuario no registrado.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-2 p-2 border rounded" />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Entrar</button>
    </form>
  );
}

export function Register({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (err) {
      setError("No se pudo registrar el usuario. Intente con otro email.");
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Registrarse</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-2 p-2 border rounded" />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
      <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Crear Cuenta</button>
    </form>
  );
}
