# `webhook_module`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| webhook_module_id | int(11) | NO | PRI | 0 |  |  |
| webhook_module_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_webhook_module_name | webhook_module_name | yes | 1 |
| PRIMARY | webhook_module_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "webhook_module_id": 1,
    "webhook_module_name": "งานส่งตัว (Referral)"
  },
  {
    "webhook_module_id": 2,
    "webhook_module_name": "ระบบ IPD Paperless"
  },
  {
    "webhook_module_id": 3,
    "webhook_module_name": "ระบบงานฝากครรภ์และห้องคลอด"
  },
  {
    "webhook_module_id": 4,
    "webhook_module_name": "ระบบงานห้องตรวจแพทย์"
  },
  {
    "webhook_module_id": 5,
    "webhook_module_name": "ระบบงานซักประวัติ"
  },
  {
    "webhook_module_id": 6,
    "webhook_module_name": "ระบบงานทะเบียนผู้ป่วยใน"
  }
]
```
