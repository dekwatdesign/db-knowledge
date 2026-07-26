# `officer_group_module_access`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_group_module_access_id | int(11) | NO | PRI | 0 |  |  |
| officer_group_id | int(11) | YES | MUL | NULL |  |  |
| officer_module_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_group_id | officer_group_id | no | 1 |
| ix_uni | officer_group_id | yes | 1 |
| ix_uni | officer_module_id | yes | 2 |
| PRIMARY | officer_group_module_access_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "officer_group_module_access_id": 1,
    "officer_group_id": 1,
    "officer_module_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2022-02-07 15:47:39"
  },
  {
    "officer_group_module_access_id": 2,
    "officer_group_id": 1,
    "officer_module_id": 2,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2022-02-07 15:47:39"
  },
  {
    "officer_group_module_access_id": 3,
    "officer_group_id": 1,
    "officer_module_id": 3,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2022-02-07 15:47:39"
  },
  {
    "officer_group_module_access_id": 4,
    "officer_group_id": 1,
    "officer_module_id": 4,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2022-02-07 15:47:39"
  },
  {
    "officer_group_module_access_id": 5,
    "officer_group_id": 1,
    "officer_module_id": 5,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2022-02-07 15:47:39"
  },
  {
    "officer_group_module_access_id": 6,
    "officer_group_id": 1,
    "officer_module_id": 6,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2022-02-07 15:47:39"
  },
  {
    "officer_group_module_access_id": 7,
    "officer_group_id": 1,
    "officer_module_id": 7,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2022-02-07 15:47:39"
  },
  {
    "officer_group_module_access_id": 8,
    "officer_group_id": 1,
    "officer_module_id": 8,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2022-02-07 15:47:39"
  }
]
```
