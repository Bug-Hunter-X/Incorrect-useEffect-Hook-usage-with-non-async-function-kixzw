```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly using async/await
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCount(prevCount => prevCount + 1);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```