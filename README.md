# 📝 Mis tareas

Aplicación web de gestión de tareas desarrollada con **React.js** como proyecto práctico de Front End.

Permite crear, editar, completar y eliminar tareas, además de filtrarlas según su estado. Las tareas se almacenan en `localStorage`, por lo que permanecen disponibles al volver a abrir la aplicación.

## ✨ Funcionalidades
* ➕ Crear nuevas tareas.
* ✏️ Editar tareas existentes.
* ✅ Marcar tareas como completadas o pendientes.
* 🗑️ Eliminar tareas individualmente.
* 🧹 Eliminar todas las tareas completadas.
* ⚠️ Eliminar todas las tareas mediante confirmación.
* 🔎 Filtrar tareas:
  * Todas
  * Pendientes
  * Completadas
* 🎨 Seleccionar un color para cada tarea.
* 💾 Persistencia de tareas mediante `localStorage`.
* 📱 Diseño responsive.
* ♻️ Componentes reutilizables.
* 🎯 Interfaz orientada a una experiencia de uso simple e intuitiva.

## 🛠️ Tecnologías
* **React.js**
* **JavaScript**
* **Vite**
* **Tailwind CSS**
* **React Icons**
* **LocalStorage**
* **Git / GitHub**

## 📁 Estructura del proyecto
```text
src/
├── components/
│   ├── AddTaskModal.jsx
│   ├── Button.jsx
│   ├── DeleteConfirmationModal.jsx
│   ├── FilterButtons.jsx
│   ├── Form.jsx
│   ├── Modal.jsx
│   ├── Todo.jsx
│   └── TodoList.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 🧩 Componentes principales

### `App`
Es el componente principal de la aplicación. Administra el estado de las tareas y coordina las diferentes funcionalidades.

Se encarga de:
* Crear tareas.
* Editar tareas.
* Completar tareas.
* Eliminar tareas.
* Filtrar tareas.
* Gestionar la apertura y cierre de los modales.
* Persistir las tareas en `localStorage`.

### `TodoList`
Recibe las tareas y las renderiza utilizando `map()`.

### `Todo`
Representa individualmente cada tarea y permite:
* Completarla.
* Editarla.
* Eliminarla.

### `Form`
Es un formulario reutilizable utilizado tanto para **crear** como para **editar** tareas.

### `Button`
Componente reutilizable para mantener consistencia entre los diferentes botones de la aplicación.

### `Modal`
Componente reutilizable utilizado como estructura base para los diferentes modales.

## 💾 Persistencia
Las tareas se almacenan en el navegador utilizando `localStorage`.
La aplicación recupera las tareas guardadas al iniciarse y actualiza el almacenamiento cada vez que cambia el estado de las tareas.
De esta forma, las tareas no se pierden al cerrar o recargar la página.

## 📱 Responsive Design
La interfaz fue desarrollada utilizando Tailwind CSS y adaptada para diferentes tamaños de pantalla.
La distribución de las tareas se ajusta según el ancho disponible para mantener una experiencia cómoda tanto en dispositivos móviles como en pantallas más grandes.

## 🌿 Git Workflow
El proyecto fue desarrollado utilizando un flujo de trabajo basado en ramas y Pull Requests.
La rama principal de desarrollo es `develop`, desde la cual se crean ramas específicas para cada funcionalidad o mejora.
Cada funcionalidad fue desarrollada en su propia rama y posteriormente integrada mediante Pull Requests.

## ⚙️ Instalación

Clonar el repositorio:
```bash
git clone URL-DEL-REPOSITORIO
```

Ingresar al proyecto:
```bash
cd nombre-del-proyecto
```

Instalar las dependencias:
```bash
pnpm install
```

Iniciar el servidor de desarrollo:
```bash
pnpm dev
```

La aplicación estará disponible en la URL indicada por Vite en la terminal.


## 👩‍💻 Autora
**Romina Pantano**
Proyecto realizado como parte del curso de Front End de Ada ITW.
