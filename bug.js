```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a non-async function
    fetchCount(); // This will not work as expected
  }, []);

  const fetchCount = () => {
    setTimeout(() => {
      setCount(count + 1); 
    }, 1000);
  };

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```