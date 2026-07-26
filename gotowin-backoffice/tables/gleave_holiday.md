# `gleave_holiday`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| DATE_HOLIDAY | date | YES |  | NULL |  |  |
| DATE_COMMENT | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| ID | int | NO | PRI | NULL | auto_increment |  |
| DATE_TYPE | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "DATE_HOLIDAY": "2018-05-14",
    "DATE_COMMENT": "วันพืชมงคล",
    "updated_at": null,
    "created_at": null,
    "ID": 1,
    "DATE_TYPE": "วันหยุดราชการ"
  },
  {
    "DATE_HOLIDAY": "2018-05-29",
    "DATE_COMMENT": "วันวิสาขบูชา",
    "updated_at": null,
    "created_at": null,
    "ID": 2,
    "DATE_TYPE": "วันหยุดราชการ"
  },
  {
    "DATE_HOLIDAY": "2018-10-23",
    "DATE_COMMENT": "วันปิยมหาราช (Chulalongkorn Memorial Day)",
    "updated_at": null,
    "created_at": null,
    "ID": 3,
    "DATE_TYPE": "วันหยุดราชการ"
  },
  {
    "DATE_HOLIDAY": "2019-04-08",
    "DATE_COMMENT": "ชดเชย วันจักรี (Chakri Memorial Day)",
    "updated_at": null,
    "created_at": null,
    "ID": 4,
    "DATE_TYPE": "หยุดชดเชย"
  },
  {
    "DATE_HOLIDAY": "2019-04-11",
    "DATE_COMMENT": "ชดเชย วันสงกรานต์ (Songkran Festival Day)",
    "updated_at": "2020-05-29 03:56:18",
    "created_at": null,
    "ID": 5,
    "DATE_TYPE": "หยุดชดเชย"
  },
  {
    "DATE_HOLIDAY": "2019-04-15",
    "DATE_COMMENT": "วันสงกรานต์ (Songkran Festival Day)",
    "updated_at": null,
    "created_at": null,
    "ID": 6,
    "DATE_TYPE": "วันหยุดราชการ"
  },
  {
    "DATE_HOLIDAY": "2019-04-16",
    "DATE_COMMENT": "ชดเชย วันสงกรานต์ (Songkran Festival Day)",
    "updated_at": null,
    "created_at": null,
    "ID": 7,
    "DATE_TYPE": "หยุดชดเชย"
  },
  {
    "DATE_HOLIDAY": "2020-04-06",
    "DATE_COMMENT": "วันจักรี (Chakri Memorial Day)",
    "updated_at": "2020-08-16 03:54:34",
    "created_at": "2020-05-29 03:06:40",
    "ID": 15,
    "DATE_TYPE": "วันหยุดราชการ"
  }
]
```
