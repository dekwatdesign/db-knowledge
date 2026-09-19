# `work_custom_app_service_reviews`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| service_id | int | NO | MUL | NULL |  | FK → work_custom_app_services.id |
| request_id | int | NO | MUL | NULL |  | FK → work_custom_app_service_requests.id |
| reviewer_id | varchar(50) | NO |  | NULL |  | gtw_user_id ของผู้ประเมิน |
| rating | tinyint(1) | NO |  | 0 |  | คะแนนดาว 1-5 |
| feedback | text | YES |  | NULL |  | ข้อเสนอแนะ (ไม่บังคับ) |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_request_id | request_id | no | 1 |
| idx_service_id | service_id | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_request_reviewer | request_id | yes | 1 |
| uk_request_reviewer | reviewer_id | yes | 2 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| request_id | `work_custom_app_service_requests.id` | fk_review_request |
| service_id | `work_custom_app_services.id` | fk_review_service |

## Sample rows (6)

```json
[
  {
    "id": 1,
    "service_id": 5,
    "request_id": 34,
    "reviewer_id": "30",
    "rating": 5,
    "feedback": "",
    "created_at": "2026-03-13 13:08:43",
    "updated_at": "2026-03-13 13:08:43"
  },
  {
    "id": 2,
    "service_id": 9,
    "request_id": 66,
    "reviewer_id": "233",
    "rating": 5,
    "feedback": "",
    "created_at": "2026-04-03 17:51:18",
    "updated_at": "2026-04-03 17:51:18"
  },
  {
    "id": 3,
    "service_id": 9,
    "request_id": 62,
    "reviewer_id": "27",
    "rating": 5,
    "feedback": "",
    "created_at": "2026-04-03 17:52:13",
    "updated_at": "2026-04-03 17:52:13"
  },
  {
    "id": 4,
    "service_id": 9,
    "request_id": 61,
    "reviewer_id": "264",
    "rating": 5,
    "feedback": "",
    "created_at": "2026-04-07 11:21:54",
    "updated_at": "2026-04-07 11:21:54"
  },
  {
    "id": 5,
    "service_id": 9,
    "request_id": 67,
    "reviewer_id": "30",
    "rating": 5,
    "feedback": "",
    "created_at": "2026-04-16 14:54:03",
    "updated_at": "2026-04-16 14:54:03"
  },
  {
    "id": 6,
    "service_id": 1,
    "request_id": 51,
    "reviewer_id": "71",
    "rating": 5,
    "feedback": "",
    "created_at": "2026-04-23 13:11:50",
    "updated_at": "2026-04-23 13:11:50"
  }
]
```
