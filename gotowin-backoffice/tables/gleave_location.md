# `gleave_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LOCATION_ID | int | NO | PRI | NULL | auto_increment |  |
| LOCATION_NAME | varchar(255) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | LOCATION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "LOCATION_ID": 3,
    "LOCATION_NAME": "ภายในจังหวัด"
  },
  {
    "LOCATION_ID": 4,
    "LOCATION_NAME": "ต่างจังหวัด"
  },
  {
    "LOCATION_ID": 5,
    "LOCATION_NAME": "ต่างประเทศ"
  },
  {
    "LOCATION_ID": 6,
    "LOCATION_NAME": "ในประเทศ"
  }
]
```
