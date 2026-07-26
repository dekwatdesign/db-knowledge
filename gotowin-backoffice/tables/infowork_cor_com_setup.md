# `infowork_cor_com_setup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| COR_COM_SET_ID | int | NO | PRI | NULL | auto_increment |  |
| COR_COM_SET_YEAR | varchar(20) | YES |  | NULL |  |  |
| COR_COM_SET_PERSON_ID | varchar(600) | YES |  | NULL |  |  |
| COR_COM_SET_LEVEL_ID | varchar(600) | YES |  | NULL |  |  |
| COR_COM_SET_LEVEL_SUB_MAX | varchar(10) | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | COR_COM_SET_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "COR_COM_SET_ID": 4,
    "COR_COM_SET_YEAR": "2565",
    "COR_COM_SET_PERSON_ID": "63",
    "COR_COM_SET_LEVEL_ID": "1",
    "COR_COM_SET_LEVEL_SUB_MAX": "2",
    "updated_at": "2022-03-24 06:54:39",
    "created_at": "2022-03-24 06:54:39"
  },
  {
    "COR_COM_SET_ID": 5,
    "COR_COM_SET_YEAR": "2565",
    "COR_COM_SET_PERSON_ID": "63",
    "COR_COM_SET_LEVEL_ID": "2",
    "COR_COM_SET_LEVEL_SUB_MAX": "2",
    "updated_at": "2022-03-24 06:54:39",
    "created_at": "2022-03-24 06:54:39"
  },
  {
    "COR_COM_SET_ID": 6,
    "COR_COM_SET_YEAR": "2565",
    "COR_COM_SET_PERSON_ID": "63",
    "COR_COM_SET_LEVEL_ID": "3",
    "COR_COM_SET_LEVEL_SUB_MAX": "2",
    "updated_at": "2022-03-24 06:54:39",
    "created_at": "2022-03-24 06:54:39"
  },
  {
    "COR_COM_SET_ID": 7,
    "COR_COM_SET_YEAR": "2565",
    "COR_COM_SET_PERSON_ID": "63",
    "COR_COM_SET_LEVEL_ID": "4",
    "COR_COM_SET_LEVEL_SUB_MAX": "2",
    "updated_at": "2022-03-24 06:54:39",
    "created_at": "2022-03-24 06:54:39"
  },
  {
    "COR_COM_SET_ID": 8,
    "COR_COM_SET_YEAR": "2565",
    "COR_COM_SET_PERSON_ID": "63",
    "COR_COM_SET_LEVEL_ID": "5",
    "COR_COM_SET_LEVEL_SUB_MAX": "2",
    "updated_at": "2022-03-24 06:54:39",
    "created_at": "2022-03-24 06:54:39"
  },
  {
    "COR_COM_SET_ID": 9,
    "COR_COM_SET_YEAR": "2541",
    "COR_COM_SET_PERSON_ID": "63",
    "COR_COM_SET_LEVEL_ID": "1",
    "COR_COM_SET_LEVEL_SUB_MAX": "2",
    "updated_at": "2022-04-26 08:50:16",
    "created_at": "2022-04-26 08:50:16"
  },
  {
    "COR_COM_SET_ID": 10,
    "COR_COM_SET_YEAR": "2541",
    "COR_COM_SET_PERSON_ID": "63",
    "COR_COM_SET_LEVEL_ID": "1",
    "COR_COM_SET_LEVEL_SUB_MAX": "1",
    "updated_at": "2022-05-27 15:52:43",
    "created_at": "2022-05-27 15:52:43"
  }
]
```
