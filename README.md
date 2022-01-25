# Exemplo de retorno

```json
[
  [
    {
      "id": "509be325-e559-41ec-9fa2-de8bd165475e",
      "email": "nelson@mail.com",
      "followersMany": [],
      "followingsMany": [
        {
          "id": "7007332b-b78d-453e-bdb8-139d11a36001",
          "email": "wellington@mail.com"
        },
        {
          "id": "b52b543f-23b5-40cc-a134-c4bf3eb04f24",
          "email": "murilo@mail.com"
        }
      ]
    },
    {
      "id": "b52b543f-23b5-40cc-a134-c4bf3eb04f24",
      "email": "murilo@mail.com",
      "followersMany": [
        {
          "id": "509be325-e559-41ec-9fa2-de8bd165475e",
          "email": "nelson@mail.com"
        }
      ],
      "followingsMany": []
    },
    {
      "id": "7007332b-b78d-453e-bdb8-139d11a36001",
      "email": "wellington@mail.com",
      "followersMany": [
        {
          "id": "509be325-e559-41ec-9fa2-de8bd165475e",
          "email": "nelson@mail.com"
        }
      ],
      "followingsMany": []
    }
  ],
  3
]
```