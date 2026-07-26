# `tb_api_delete_triggers`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| api_delete_triggers_date | date | NO | PRI | 0000-00-00 |  |  |
| api_delete_triggers_company_id | varchar(20) | NO | PRI |  |  |  |
| api_delete_triggers_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | api_delete_triggers_date | yes | 1 |
| PRIMARY | api_delete_triggers_company_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "api_delete_triggers_date": "2020-05-14",
    "api_delete_triggers_company_id": "LYhWfcJCXApqvsZ",
    "api_delete_triggers_status": "Y"
  },
  {
    "api_delete_triggers_date": "2020-05-14",
    "api_delete_triggers_company_id": "others",
    "api_delete_triggers_status": "Y"
  },
  {
    "api_delete_triggers_date": "2020-05-14",
    "api_delete_triggers_company_id": "VisitUpdateData",
    "api_delete_triggers_status": "Y"
  },
  {
    "api_delete_triggers_date": "2020-05-15",
    "api_delete_triggers_company_id": "LYhWfcJCXApqvsZ",
    "api_delete_triggers_status": "Y"
  },
  {
    "api_delete_triggers_date": "2020-05-15",
    "api_delete_triggers_company_id": "others",
    "api_delete_triggers_status": "Y"
  },
  {
    "api_delete_triggers_date": "2020-05-15",
    "api_delete_triggers_company_id": "VisitUpdateData",
    "api_delete_triggers_status": "Y"
  },
  {
    "api_delete_triggers_date": "2020-05-16",
    "api_delete_triggers_company_id": "LYhWfcJCXApqvsZ",
    "api_delete_triggers_status": "Y"
  },
  {
    "api_delete_triggers_date": "2020-05-16",
    "api_delete_triggers_company_id": "others",
    "api_delete_triggers_status": "Y"
  }
]
```
