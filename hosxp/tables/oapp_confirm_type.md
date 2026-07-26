# `oapp_confirm_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_confirm_type_id | int(11) | NO | PRI | NULL |  |  |
| oapp_confirm_type_name | varchar(200) | NO | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_oapp_confirm_type_name | oapp_confirm_type_name | yes | 1 |
| PRIMARY | oapp_confirm_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "oapp_confirm_type_id": 1,
    "oapp_confirm_type_name": "ยืนยันแล้ว"
  },
  {
    "oapp_confirm_type_id": 2,
    "oapp_confirm_type_name": "รอยืนยัน"
  }
]
```
