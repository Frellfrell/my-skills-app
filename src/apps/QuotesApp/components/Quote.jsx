import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../redux/quoteSlice";
import styles from "../styles/Quote.module.css";


const Quote = () => {
const dispatch = useDispatch();
const { text, author, status, error } = useSelector((state) => state.quote);


useEffect(() => {
dispatch(fetchRandomQuote());// Загружаем цитату при монтировании компонента
}, [dispatch]);


const handleNewQuote = () => {
dispatch(fetchRandomQuote());// Загружаем новую цитату
};


return (
<div className={styles.card}>
{status === "loading" && <div className={styles.loading}>Загрузка...</div>}


{status === "failed" && (
<div className={styles.error}>
<p>Ошибка: {String(error)}</p>
<button className={styles.button} onClick={handleNewQuote}>
Повторить
</button>
</div>
)}


{status === "succeeded" && (
<div className={styles.content}>
<blockquote className={styles.quote}>“{text}”</blockquote>
<div className={styles.author}>— {author || "Неизвестен"}</div>
<div className={styles.controls}>
<button className={styles.button} onClick={handleNewQuote}>
Новая цитата
</button>
</div>
</div>
)}


{status === "idle" && (
<div className={styles.idle}>Нажмите «Новая цитата» для старта.</div>
)}
</div>
);
};


export default Quote;
