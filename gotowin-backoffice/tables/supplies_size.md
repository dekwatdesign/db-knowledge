# `supplies_size`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SIZE_ID | int | NO | PRI | NULL | auto_increment |  |
| SIZE_NAME | varchar(100) | YES |  |  |  |  |
| MODEL_ID | varchar(10) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SIZE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "SIZE_ID": 1,
    "SIZE_NAME": "SIZE 455",
    "MODEL_ID": "50"
  },
  {
    "SIZE_ID": 2,
    "SIZE_NAME": "77",
    "MODEL_ID": "50"
  },
  {
    "SIZE_ID": 3,
    "SIZE_NAME": "888",
    "MODEL_ID": "51"
  },
  {
    "SIZE_ID": 4,
    "SIZE_NAME": "fsfsfs",
    "MODEL_ID": "50"
  },
  {
    "SIZE_ID": 5,
    "SIZE_NAME": "99988",
    "MODEL_ID": "51"
  },
  {
    "SIZE_ID": 6,
    "SIZE_NAME": "HP SIZE",
    "MODEL_ID": "52"
  },
  {
    "SIZE_ID": 7,
    "SIZE_NAME": "3000",
    "MODEL_ID": "1"
  },
  {
    "SIZE_ID": 8,
    "SIZE_NAME": "3000",
    "MODEL_ID": "1"
  }
]
```
