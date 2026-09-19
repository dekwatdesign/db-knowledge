# `work_activity_logs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint | NO | PRI | NULL | auto_increment |  |
| gtw_user_id | int | YES | MUL | NULL |  | GTW user id (null = anonymous) |
| action | varchar(100) | NO | MUL | NULL |  | login / logout / create / update / delete / approve / cancel ... |
| module | varchar(100) | NO | MUL | NULL |  | auth / account / service_request / custom_app ... |
| record_id | varchar(50) | YES |  | NULL |  | id ของ record ที่เกี่ยวข้อง (ถ้ามี) |
| description | text | YES |  | NULL |  | คำอธิบายละเอียด |
| ip_address | varchar(100) | YES |  | NULL |  |  |
| user_agent | text | YES |  | NULL |  | Browser / client user agent |
| created_at | datetime | NO | MUL | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_al_action | action | no | 1 |
| idx_al_created_at | created_at | no | 1 |
| idx_al_gtw_user_id | gtw_user_id | no | 1 |
| idx_al_module | module | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "gtw_user_id": 253,
    "action": "logout",
    "module": "auth",
    "record_id": null,
    "description": "ออกจากระบบ",
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 12:14:47"
  },
  {
    "id": 2,
    "gtw_user_id": 253,
    "action": "login",
    "module": "auth",
    "record_id": null,
    "description": "เข้าสู่ระบบสำเร็จ username: ycap253",
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 12:14:54"
  },
  {
    "id": 3,
    "gtw_user_id": 302,
    "action": "login",
    "module": "auth",
    "record_id": null,
    "description": "เข้าสู่ระบบสำเร็จ username: ycap302",
    "ip_address": "192.168.10.197, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 13:16:55"
  },
  {
    "id": 4,
    "gtw_user_id": 64,
    "action": "login",
    "module": "auth",
    "record_id": null,
    "description": "เข้าสู่ระบบสำเร็จ username: ycap064",
    "ip_address": "192.168.10.69, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 13:24:29"
  },
  {
    "id": 5,
    "gtw_user_id": 253,
    "action": "login",
    "module": "auth",
    "record_id": null,
    "description": "เข้าสู่ระบบสำเร็จ username: ycap253",
    "ip_address": "192.168.200.76, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/29.0 Chrome/136.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 13:31:58"
  },
  {
    "id": 6,
    "gtw_user_id": 107,
    "action": "create",
    "module": "service_request",
    "record_id": "32",
    "description": "สร้างคำขอ #32 service_id=5",
    "ip_address": "192.168.10.108, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 13:44:53"
  },
  {
    "id": 7,
    "gtw_user_id": 253,
    "action": "update",
    "module": "service_request",
    "record_id": "32",
    "description": "บันทึกผลดำเนินการคำขอ #32 เปลี่ยนสถานะ: pending → completed",
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 13:48:29"
  },
  {
    "id": 8,
    "gtw_user_id": 212,
    "action": "login",
    "module": "auth",
    "record_id": null,
    "description": "เข้าสู่ระบบสำเร็จ username: ycap212",
    "ip_address": "192.168.10.27, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 14:32:20"
  }
]
```
