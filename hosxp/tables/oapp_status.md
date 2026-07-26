# `oapp_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_status_id | int(11) | NO | PRI | 0 |  |  |
| oapp_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_oapp_status_name | oapp_status_name | yes | 1 |
| PRIMARY | oapp_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "oapp_status_id": 2,
    "oapp_status_name": "มารับบริการแล้ว"
  },
  {
    "oapp_status_id": 3,
    "oapp_status_name": "ไม่มาตามนัด"
  },
  {
    "oapp_status_id": 4,
    "oapp_status_name": "ยกเลิก"
  },
  {
    "oapp_status_id": 1,
    "oapp_status_name": "รอให้ถึงวันนัด"
  }
]
```
