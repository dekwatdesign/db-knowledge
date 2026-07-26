# `operate_index`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPERATE_INDEX_ID | int | NO | PRI | NULL | auto_increment |  |
| OPERATE_DEPARTMENT_ID | int | YES |  | NULL |  |  |
| OPERATE_INDEX_MONTH | int | YES |  | NULL |  |  |
| OPERATE_INDEX_YEAR | varchar(255) | YES |  | NULL |  |  |
| OPERATE_ORGANIZER_ID | int | YES |  | NULL |  |  |
| OPERATE_ORGANIZER_NAME | varchar(100) | YES |  | NULL |  |  |
| OPERATE_VERIFY_1_ID | int | YES |  | NULL |  |  |
| OPERATE_VERIFY_1_NAME | varchar(100) | YES |  | NULL |  |  |
| OPERATE_VERIFY_2_ID | int | YES |  | NULL |  |  |
| OPERATE_VERIFY_2_NAME | varchar(100) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| OPERATE_STATUS | varchar(100) | YES |  | NULL |  |  |
| OPERATE_VERIFY_ID | int | YES |  | NULL |  |  |
| OPERATE_VERIFY_COMMENT | varchar(255) | YES |  | NULL |  |  |
| OPERATE_APPROV_ID | int | YES |  | NULL |  |  |
| OPERATE_APPROV_COMMENT | varchar(255) | YES |  | NULL |  |  |
| OPERATE_INFORM_ID | int | YES |  | NULL |  |  |
| OPERATE_INFORM_COMMENT | varchar(255) | YES |  | NULL |  |  |
| OPERATE_CANCEL_ID | int | YES |  | NULL |  |  |
| OPERATE_CANCEL_COMMENT | varchar(255) | YES |  | NULL |  |  |
| OPERATE_TYPE | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPERATE_INDEX_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "OPERATE_INDEX_ID": 1,
    "OPERATE_DEPARTMENT_ID": 25,
    "OPERATE_INDEX_MONTH": 1,
    "OPERATE_INDEX_YEAR": "2022",
    "OPERATE_ORGANIZER_ID": 63,
    "OPERATE_ORGANIZER_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_1_ID": 53,
    "OPERATE_VERIFY_1_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_2_ID": 53,
    "OPERATE_VERIFY_2_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-01-20 10:12:57",
    "created_at": "2022-01-20 10:12:57",
    "OPERATE_STATUS": "Pending",
    "OPERATE_VERIFY_ID": null,
    "OPERATE_VERIFY_COMMENT": null,
    "OPERATE_APPROV_ID": null,
    "OPERATE_APPROV_COMMENT": null,
    "OPERATE_INFORM_ID": null,
    "OPERATE_INFORM_COMMENT": null,
    "OPERATE_CANCEL_ID": null,
    "OPERATE_CANCEL_COMMENT": null,
    "OPERATE_TYPE": "1"
  },
  {
    "OPERATE_INDEX_ID": 2,
    "OPERATE_DEPARTMENT_ID": 16,
    "OPERATE_INDEX_MONTH": 10,
    "OPERATE_INDEX_YEAR": "2022",
    "OPERATE_ORGANIZER_ID": 14,
    "OPERATE_ORGANIZER_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_1_ID": 212,
    "OPERATE_VERIFY_1_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_2_ID": 66,
    "OPERATE_VERIFY_2_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-10-03 02:44:11",
    "created_at": "2022-10-03 02:44:11",
    "OPERATE_STATUS": "Pending",
    "OPERATE_VERIFY_ID": null,
    "OPERATE_VERIFY_COMMENT": null,
    "OPERATE_APPROV_ID": null,
    "OPERATE_APPROV_COMMENT": null,
    "OPERATE_INFORM_ID": null,
    "OPERATE_INFORM_COMMENT": null,
    "OPERATE_CANCEL_ID": null,
    "OPERATE_CANCEL_COMMENT": null,
    "OPERATE_TYPE": "1"
  },
  {
    "OPERATE_INDEX_ID": 3,
    "OPERATE_DEPARTMENT_ID": 16,
    "OPERATE_INDEX_MONTH": 11,
    "OPERATE_INDEX_YEAR": "2022",
    "OPERATE_ORGANIZER_ID": 14,
    "OPERATE_ORGANIZER_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_1_ID": 9,
    "OPERATE_VERIFY_1_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_2_ID": 66,
    "OPERATE_VERIFY_2_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-12-02 06:16:04",
    "created_at": "2022-12-02 06:16:04",
    "OPERATE_STATUS": "Pending",
    "OPERATE_VERIFY_ID": null,
    "OPERATE_VERIFY_COMMENT": null,
    "OPERATE_APPROV_ID": null,
    "OPERATE_APPROV_COMMENT": null,
    "OPERATE_INFORM_ID": null,
    "OPERATE_INFORM_COMMENT": null,
    "OPERATE_CANCEL_ID": null,
    "OPERATE_CANCEL_COMMENT": null,
    "OPERATE_TYPE": "1"
  },
  {
    "OPERATE_INDEX_ID": 4,
    "OPERATE_DEPARTMENT_ID": 8,
    "OPERATE_INDEX_MONTH": 1,
    "OPERATE_INDEX_YEAR": "2025",
    "OPERATE_ORGANIZER_ID": 237,
    "OPERATE_ORGANIZER_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_1_ID": 237,
    "OPERATE_VERIFY_1_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_2_ID": 250,
    "OPERATE_VERIFY_2_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2024-12-27 06:46:18",
    "created_at": "2024-12-27 06:44:45",
    "OPERATE_STATUS": "Inform",
    "OPERATE_VERIFY_ID": null,
    "OPERATE_VERIFY_COMMENT": null,
    "OPERATE_APPROV_ID": null,
    "OPERATE_APPROV_COMMENT": null,
    "OPERATE_INFORM_ID": 237,
    "OPERATE_INFORM_COMMENT": null,
    "OPERATE_CANCEL_ID": null,
    "OPERATE_CANCEL_COMMENT": null,
    "OPERATE_TYPE": "1"
  },
  {
    "OPERATE_INDEX_ID": 5,
    "OPERATE_DEPARTMENT_ID": 4,
    "OPERATE_INDEX_MONTH": 7,
    "OPERATE_INDEX_YEAR": "2025",
    "OPERATE_ORGANIZER_ID": 237,
    "OPERATE_ORGANIZER_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_1_ID": 237,
    "OPERATE_VERIFY_1_NAME": "[MASKED_FULLNAME]",
    "OPERATE_VERIFY_2_ID": 17,
    "OPERATE_VERIFY_2_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2025-07-08 03:07:09",
    "created_at": "2025-07-08 03:05:54",
    "OPERATE_STATUS": "Inform",
    "OPERATE_VERIFY_ID": null,
    "OPERATE_VERIFY_COMMENT": null,
    "OPERATE_APPROV_ID": null,
    "OPERATE_APPROV_COMMENT": null,
    "OPERATE_INFORM_ID": 237,
    "OPERATE_INFORM_COMMENT": null,
    "OPERATE_CANCEL_ID": null,
    "OPERATE_CANCEL_COMMENT": null,
    "OPERATE_TYPE": "2"
  }
]
```
