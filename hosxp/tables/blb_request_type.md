# `blb_request_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_request_type_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_type_name | varchar(200) | YES |  | NULL |  |  |
| blb_request_type_emergency | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_request_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "blb_request_type_id": 1,
    "blb_request_type_name": "Complete Cross-matching",
    "blb_request_type_emergency": null
  },
  {
    "blb_request_type_id": 2,
    "blb_request_type_name": "ด่วนมาก ไม่รอ Complete Cross-matching",
    "blb_request_type_emergency": null
  },
  {
    "blb_request_type_id": 3,
    "blb_request_type_name": "จองผ่าตัด",
    "blb_request_type_emergency": null
  }
]
```
