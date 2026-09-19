# `work_access_logs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint | NO | PRI | NULL | auto_increment |  |
| gtw_user_id | int | YES | MUL | NULL |  | GTW user id (null = guest) |
| method | varchar(10) | NO |  | GET |  | HTTP method: GET/POST |
| page | varchar(500) | NO | MUL | NULL |  | pkey หรือ URL page ที่เข้าถึง |
| query_string | varchar(1000) | YES |  | NULL |  | GET query string |
| ip_address | varchar(100) | YES |  | NULL |  |  |
| user_agent | text | YES |  | NULL |  |  |
| created_at | datetime | NO | MUL | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_acc_created_at | created_at | no | 1 |
| idx_acc_gtw_user_id | gtw_user_id | no | 1 |
| idx_acc_page | page | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "gtw_user_id": 253,
    "method": "GET",
    "page": "system_dashboard_view",
    "query_string": null,
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 15:03:47"
  },
  {
    "id": 2,
    "gtw_user_id": 253,
    "method": "GET",
    "page": "system_dashboard_view",
    "query_string": null,
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 15:04:14"
  },
  {
    "id": 3,
    "gtw_user_id": 253,
    "method": "GET",
    "page": "system_dashboard_view",
    "query_string": null,
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 15:04:32"
  },
  {
    "id": 4,
    "gtw_user_id": 253,
    "method": "GET",
    "page": "system_dashboard_view",
    "query_string": null,
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 16:11:03"
  },
  {
    "id": 5,
    "gtw_user_id": 253,
    "method": "GET",
    "page": "system_accounts_view",
    "query_string": null,
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 16:11:06"
  },
  {
    "id": 6,
    "gtw_user_id": 253,
    "method": "GET",
    "page": "system_accounts_roles_view",
    "query_string": null,
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 16:11:07"
  },
  {
    "id": 7,
    "gtw_user_id": 253,
    "method": "GET",
    "page": "system_accounts_view",
    "query_string": null,
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 16:11:10"
  },
  {
    "id": 8,
    "gtw_user_id": 253,
    "method": "GET",
    "page": "system_dashboard_view",
    "query_string": null,
    "ip_address": "192.168.10.6, 192.168.10.20",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
    "created_at": "2026-03-11 16:11:11"
  }
]
```
