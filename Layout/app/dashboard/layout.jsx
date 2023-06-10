export default function DashboardLayout({ children }) {
  return (
    <section className="w-1/2 h-64 rounded bg-slate-500 shadow-sm text-white px-3 py-5 relative my-10 mx-auto">
      {children}
    </section>
  );
}

//IN the root directory there must have a layout.js file that contains html,body tag and its name will be
// function RootLayout({children})
