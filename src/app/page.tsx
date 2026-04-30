export default function Home() {
  // Plan:
  // 1. ליצור קומפוננטה עבור תפריט הניווט העליון (Navbar).
  // 2. לשלב את ה-Navbar בראש העמוד, מעל הכותרת והמלל.
  // 3. לעצב את התפריט כך שהוא יהיה מעוגל, מודגש ורספונסיבי.
  // 4. להוסיף מספר קישורים בתפריט (לדוג’, דף הבית, אודות, צור קשר).
  // 5. להמשיך להציג את שאר תוכן הדף מתחת לתפריט.

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* תפריט ניווט עליון */}
      <nav className="w-full px-8 py-4 bg-white/70 dark:bg-zinc-900/70 shadow-md backdrop-blur flex justify-center mb-8">
        <ul className="flex gap-8">
          <li>
            <a href="#" className="font-semibold text-black dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400">
             צור קשר
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-black dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400">
              אודות
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-black dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400">
              דף הבית
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
        האתר החדש שלי
      </h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300">
        ברוכים הבאים לאתר החדש שלי! כאן תמצאו את כל המידע שאתם צריכים.
      </p>
    </div>
  );
}
