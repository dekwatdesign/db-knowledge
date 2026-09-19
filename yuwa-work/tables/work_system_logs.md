# `work_system_logs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint | NO | PRI | NULL | auto_increment |  |
| level | varchar(20) | NO | MUL | info |  | info / warning / error |
| module | varchar(100) | NO | MUL | NULL |  | auth / account / service_request ... |
| message | text | NO |  | NULL |  | ข้อความ log |
| context | longtext | YES |  | NULL |  | JSON ข้อมูลเพิ่มเติม |
| created_at | datetime | NO | MUL | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_sl_created_at | created_at | no | 1 |
| idx_sl_level | level | no | 1 |
| idx_sl_module | module | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "id": 1,
    "level": "warning",
    "module": "auth",
    "message": "reCAPTCHA ผ่านไม่ได้",
    "context": "{\"score\":null,\"success\":false,\"ip\":\"192.168.10.20\"}",
    "created_at": "2026-04-01 00:07:43"
  },
  {
    "id": 2,
    "level": "warning",
    "module": "auth",
    "message": "reCAPTCHA ผ่านไม่ได้",
    "context": "{\"score\":null,\"success\":false,\"ip\":\"192.168.10.20\"}",
    "created_at": "2026-04-01 00:07:53"
  }
]
```
