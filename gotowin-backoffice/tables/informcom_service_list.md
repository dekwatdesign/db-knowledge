# `informcom_service_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SERVICE_LIST_ID | int | NO | PRI | NULL | auto_increment |  |
| SERVICE_LIST_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SERVICE_LIST_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "SERVICE_LIST_ID": 1,
    "SERVICE_LIST_NAME": "โปรแกรม HOSxP",
    "updated_at": null,
    "created_at": null
  },
  {
    "SERVICE_LIST_ID": 2,
    "SERVICE_LIST_NAME": "โปรแกรม Microsoft Office",
    "updated_at": "2022-05-19 04:43:07",
    "created_at": null
  },
  {
    "SERVICE_LIST_ID": 3,
    "SERVICE_LIST_NAME": "โปรแกรม THAI REFER",
    "updated_at": null,
    "created_at": null
  },
  {
    "SERVICE_LIST_ID": 4,
    "SERVICE_LIST_NAME": "โปรแกรม E-Claim",
    "updated_at": null,
    "created_at": null
  },
  {
    "SERVICE_LIST_ID": 5,
    "SERVICE_LIST_NAME": "โปรแกรม Claim",
    "updated_at": null,
    "created_at": null
  },
  {
    "SERVICE_LIST_ID": 6,
    "SERVICE_LIST_NAME": "โปรแกรม Ds Asset",
    "updated_at": null,
    "created_at": null
  },
  {
    "SERVICE_LIST_ID": 7,
    "SERVICE_LIST_NAME": "โปรแกรม Ds Service",
    "updated_at": null,
    "created_at": null
  },
  {
    "SERVICE_LIST_ID": 8,
    "SERVICE_LIST_NAME": "โปรแกรม Scan OPD",
    "updated_at": "2023-05-16 01:49:28",
    "created_at": null
  }
]
```
