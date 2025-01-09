```javascript
// Incorrect usage of $inc operator in MongoDB
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { count: '1' } } );
```