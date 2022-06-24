## About Project

![Screenshot](screenshot.webp)
Applications about learning basic English vocabulary. The main feature of this app is the illustration of vocabulary and text-to-speech.

### JSON Firestore Structure

```JSON
{
  "Dictionary": [
    {
      "id": "",
      "data": {
        "image": "",
        "mainCategory": "noun",
        "otherCategory": "",
        "wordEn": "",
        "wordId": "",
      },
    },
  ],
  "Questions": [
    {
      "id": "",
      "data": {
        "correctOption": 0,
        "image": "",
        "language": "",
        "level": 0,
        "mainCategory": "noun",
        "options": [],
        "otherCategory": "",
        "question": "",
        "type": 0,
      }
    }
  ]
}
```


### Built With

[<img src='react.svg' width='100' />](https://reactnative.dev/)

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.