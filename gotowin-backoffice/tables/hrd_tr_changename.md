# `hrd_tr_changename`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | bigint | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(20) | YES |  |  |  |  |
| DATE_CHANGE | date | YES |  | NULL |  |  |
| NAMEOLD | varchar(500) | YES |  |  |  |  |
| NAMENEW | varchar(500) | YES |  |  |  |  |
| IMG1 | longblob | YES |  | NULL |  |  |
| IMG2 | longblob | YES |  | NULL |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| USER_EDIT_ID | varchar(20) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ID": 1,
    "PERSON_ID": "71",
    "DATE_CHANGE": "2013-05-27",
    "NAMEOLD": "[MASKED_FULLNAME]",
    "NAMENEW": "[MASKED_FULLNAME]",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "71",
    "updated_at": "2020-09-28 03:20:52",
    "created_at": "2020-09-28 03:20:52"
  },
  {
    "ID": 2,
    "PERSON_ID": "124",
    "DATE_CHANGE": "2016-07-21",
    "NAMEOLD": "[MASKED_FULLNAME]",
    "NAMENEW": "[MASKED_FULLNAME]",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "124",
    "updated_at": "2020-09-30 11:04:14",
    "created_at": "2020-09-30 11:04:14"
  },
  {
    "ID": 3,
    "PERSON_ID": "32",
    "DATE_CHANGE": "2024-06-25",
    "NAMEOLD": "[MASKED_FULLNAME]",
    "NAMENEW": "[MASKED_FULLNAME]",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "32",
    "updated_at": "2024-08-02 08:56:35",
    "created_at": "2024-08-02 08:56:35"
  }
]
```
