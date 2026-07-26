# `xray_items_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_items_service_type_id | int(11) | NO | PRI | 0 |  |  |
| xray_items_service_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xray_items_service_type_name | xray_items_service_type_name | yes | 1 |
| PRIMARY | xray_items_service_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "xray_items_service_type_id": 2,
    "xray_items_service_type_name": "ส่งตรวจภายนอก"
  },
  {
    "xray_items_service_type_id": 1,
    "xray_items_service_type_name": "ส่งตรวจภายใน"
  }
]
```
