# `work_custom_app_service_request_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| request_id | int | NO | MUL | NULL |  | FK → work_custom_app_service_requests.id |
| action | varchar(30) | NO |  | NULL |  | created / updated / status_changed / operation_saved |
| changed_by | varchar(50) | NO |  | NULL |  | gtw_user_id ผู้ทำการ |
| old_data | longtext | YES |  | NULL |  | JSON ข้อมูลก่อนเปลี่ยน |
| new_data | longtext | YES |  | NULL |  | JSON ข้อมูลหลังเปลี่ยน |
| note | varchar(255) | YES |  | NULL |  | หมายเหตุเพิ่มเติม |
| changed_at | datetime | NO | MUL | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_changed_at | changed_at | no | 1 |
| idx_request_id | request_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| request_id | `work_custom_app_service_requests.id` | fk_req_history_request |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "request_id": 1,
    "action": "created",
    "changed_by": "253",
    "old_data": null,
    "new_data": "{\"status\":\"pending\",\"request_data\":{\"Datetime of use\":{\"start\":\"2026-02-20T13:00\",\"end\":\"2026-02-20T16:00\"},\"Meeting Room\":\"\\u0e2b\\u0e49\\u0e2d\\u0e07\\u0e1b\\u0e23\\u0e30\\u0e0a\\u0e38\\u0e21 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"\\u0e01\\u0e23\\u0e30\\u0e15\\u0e34\\u0e01\\u0e19\\u0e49\\u0e33\\u0e41\\u0e02\\u0e47\\u0e07 (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33\\u0e41\\u0e02\\u0e47\\u0e07)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e01\\u0e23\\u0e30\\u0e15\\u0e34\\u0e01\\u0e19\\u0e49\\u0e33\\u0e23\\u0e49\\u0e2d\\u0e19 (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e04\\u0e39\\u0e25\\u0e40\\u0e25\\u0e2d\\u0e23\\u0e4c (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e22\\u0e32\\u0e27 \\/ \\u0e08\\u0e32\\u0e19\\u0e23\\u0e2d\\u0e07 \\/ \\u0e1d\\u0e32\\u0e1b\\u0e34\\u0e14\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e2a\\u0e31\\u0e49\\u0e19 \\/ \\u0e08\\u0e32\\u0e19\\u0e23\\u0e2d\\u0e07 \\/ \\u0e1d\\u0e48\\u0e32\\u0e1b\\u0e34\\u0e14\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e1e\\u0e25\\u0e32\\u0e2a\\u0e15\\u0e34\\u0e01\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e0a\\u0e38\\u0e14\\u0e01\\u0e32\\u0e41\\u0e1f \\/ \\u0e02\\u0e49\\u0e2d\\u0e19 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e40\\u0e2b\\u0e22\\u0e37\\u0e2d\\u0e01\\u0e19\\u0e49\\u0e33\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e01\\u0e34\\u0e19\\u0e02\\u0e49\\u0e32\\u0e27 \\/ \\u0e0b\\u0e49\\u0e2d\\u0e19 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e41\\u0e1a\\u0e48\\u0e07 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\\u0e40\\u0e25\\u0e47\\u0e01\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e40\\u0e1b\\u0e25\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e0a\\u0e32\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e49\\u0e27\\u0e22\\u0e41\\u0e1a\\u0e48\\u0e07 \\/ \\u0e0a\\u0e49\\u0e2d\\u0e19\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e49\\u0e27\\u0e22\\u0e19\\u0e49\\u0e33\\u0e08\\u0e34\\u0e49\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e32\\u0e14\\u0e40\\u0e2a\\u0e34\\u0e23\\u0e4c\\u0e1f\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e2d\\u0e37\\u0e48\\u0e19\\u0e46\",\"cols\":[\"\"]}]}}",
    "note": null,
    "changed_at": "2026-02-19 13:07:10"
  },
  {
    "id": 2,
    "request_id": 2,
    "action": "created",
    "changed_by": "253",
    "old_data": null,
    "new_data": "{\"status\":\"pending\",\"request_data\":{\"Datetime of use\":{\"start\":\"2026-02-20T13:00\",\"end\":\"2026-02-20T16:00\"},\"Meeting Room\":\"\\u0e2b\\u0e49\\u0e2d\\u0e07\\u0e1b\\u0e23\\u0e30\\u0e0a\\u0e38\\u0e21 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"\\u0e01\\u0e23\\u0e30\\u0e15\\u0e34\\u0e01\\u0e19\\u0e49\\u0e33\\u0e41\\u0e02\\u0e47\\u0e07 (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33\\u0e41\\u0e02\\u0e47\\u0e07)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e01\\u0e23\\u0e30\\u0e15\\u0e34\\u0e01\\u0e19\\u0e49\\u0e33\\u0e23\\u0e49\\u0e2d\\u0e19 (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e04\\u0e39\\u0e25\\u0e40\\u0e25\\u0e2d\\u0e23\\u0e4c (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e22\\u0e32\\u0e27 \\/ \\u0e08\\u0e32\\u0e19\\u0e23\\u0e2d\\u0e07 \\/ \\u0e1d\\u0e32\\u0e1b\\u0e34\\u0e14\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e2a\\u0e31\\u0e49\\u0e19 \\/ \\u0e08\\u0e32\\u0e19\\u0e23\\u0e2d\\u0e07 \\/ \\u0e1d\\u0e48\\u0e32\\u0e1b\\u0e34\\u0e14\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e1e\\u0e25\\u0e32\\u0e2a\\u0e15\\u0e34\\u0e01\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e0a\\u0e38\\u0e14\\u0e01\\u0e32\\u0e41\\u0e1f \\/ \\u0e02\\u0e49\\u0e2d\\u0e19 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e40\\u0e2b\\u0e22\\u0e37\\u0e2d\\u0e01\\u0e19\\u0e49\\u0e33\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e01\\u0e34\\u0e19\\u0e02\\u0e49\\u0e32\\u0e27 \\/ \\u0e0b\\u0e49\\u0e2d\\u0e19 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e41\\u0e1a\\u0e48\\u0e07 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\\u0e40\\u0e25\\u0e47\\u0e01\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e40\\u0e1b\\u0e25\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e0a\\u0e32\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e49\\u0e27\\u0e22\\u0e41\\u0e1a\\u0e48\\u0e07 \\/ \\u0e0a\\u0e49\\u0e2d\\u0e19\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e49\\u0e27\\u0e22\\u0e19\\u0e49\\u0e33\\u0e08\\u0e34\\u0e49\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e32\\u0e14\\u0e40\\u0e2a\\u0e34\\u0e23\\u0e4c\\u0e1f\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e2d\\u0e37\\u0e48\\u0e19\\u0e46\",\"cols\":[\"\"]}]}}",
    "note": null,
    "changed_at": "2026-02-19 13:07:20"
  },
  {
    "id": 3,
    "request_id": 3,
    "action": "created",
    "changed_by": "253",
    "old_data": null,
    "new_data": "{\"status\":\"pending\",\"request_data\":{\"Datetime of use\":{\"start\":\"2026-02-20T13:00\",\"end\":\"2026-02-20T16:00\"},\"Meeting Room\":\"\\u0e2b\\u0e49\\u0e2d\\u0e07\\u0e1b\\u0e23\\u0e30\\u0e0a\\u0e38\\u0e21 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"\\u0e01\\u0e23\\u0e30\\u0e15\\u0e34\\u0e01\\u0e19\\u0e49\\u0e33\\u0e41\\u0e02\\u0e47\\u0e07 (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33\\u0e41\\u0e02\\u0e47\\u0e07)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e01\\u0e23\\u0e30\\u0e15\\u0e34\\u0e01\\u0e19\\u0e49\\u0e33\\u0e23\\u0e49\\u0e2d\\u0e19 (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e04\\u0e39\\u0e25\\u0e40\\u0e25\\u0e2d\\u0e23\\u0e4c (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e22\\u0e32\\u0e27 \\/ \\u0e08\\u0e32\\u0e19\\u0e23\\u0e2d\\u0e07 \\/ \\u0e1d\\u0e32\\u0e1b\\u0e34\\u0e14\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e2a\\u0e31\\u0e49\\u0e19 \\/ \\u0e08\\u0e32\\u0e19\\u0e23\\u0e2d\\u0e07 \\/ \\u0e1d\\u0e48\\u0e32\\u0e1b\\u0e34\\u0e14\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e1e\\u0e25\\u0e32\\u0e2a\\u0e15\\u0e34\\u0e01\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e0a\\u0e38\\u0e14\\u0e01\\u0e32\\u0e41\\u0e1f \\/ \\u0e02\\u0e49\\u0e2d\\u0e19 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e40\\u0e2b\\u0e22\\u0e37\\u0e2d\\u0e01\\u0e19\\u0e49\\u0e33\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e01\\u0e34\\u0e19\\u0e02\\u0e49\\u0e32\\u0e27 \\/ \\u0e0b\\u0e49\\u0e2d\\u0e19 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e41\\u0e1a\\u0e48\\u0e07 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\\u0e40\\u0e25\\u0e47\\u0e01\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e40\\u0e1b\\u0e25\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e0a\\u0e32\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e49\\u0e27\\u0e22\\u0e41\\u0e1a\\u0e48\\u0e07 \\/ \\u0e0a\\u0e49\\u0e2d\\u0e19\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e49\\u0e27\\u0e22\\u0e19\\u0e49\\u0e33\\u0e08\\u0e34\\u0e49\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e32\\u0e14\\u0e40\\u0e2a\\u0e34\\u0e23\\u0e4c\\u0e1f\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e2d\\u0e37\\u0e48\\u0e19\\u0e46\",\"cols\":[\"\"]}]}}",
    "note": null,
    "changed_at": "2026-02-19 13:09:04"
  },
  {
    "id": 4,
    "request_id": 4,
    "action": "created",
    "changed_by": "253",
    "old_data": null,
    "new_data": "{\"status\":\"pending\",\"request_data\":{\"Datetime of use\":{\"start\":\"2026-02-20T13:00\",\"end\":\"2026-02-20T16:00\"},\"Meeting Room\":\"\\u0e2b\\u0e49\\u0e2d\\u0e07\\u0e1b\\u0e23\\u0e30\\u0e0a\\u0e38\\u0e21 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"\\u0e01\\u0e23\\u0e30\\u0e15\\u0e34\\u0e01\\u0e19\\u0e49\\u0e33\\u0e41\\u0e02\\u0e47\\u0e07 (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33\\u0e41\\u0e02\\u0e47\\u0e07)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e01\\u0e23\\u0e30\\u0e15\\u0e34\\u0e01\\u0e19\\u0e49\\u0e33\\u0e23\\u0e49\\u0e2d\\u0e19 (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e04\\u0e39\\u0e25\\u0e40\\u0e25\\u0e2d\\u0e23\\u0e4c (\\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e19\\u0e49\\u0e33)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e22\\u0e32\\u0e27 \\/ \\u0e08\\u0e32\\u0e19\\u0e23\\u0e2d\\u0e07 \\/ \\u0e1d\\u0e32\\u0e1b\\u0e34\\u0e14\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e2a\\u0e31\\u0e49\\u0e19 \\/ \\u0e08\\u0e32\\u0e19\\u0e23\\u0e2d\\u0e07 \\/ \\u0e1d\\u0e48\\u0e32\\u0e1b\\u0e34\\u0e14\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"\\u0e41\\u0e01\\u0e49\\u0e27\\u0e19\\u0e49\\u0e33\\u0e1e\\u0e25\\u0e32\\u0e2a\\u0e15\\u0e34\\u0e01\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e0a\\u0e38\\u0e14\\u0e01\\u0e32\\u0e41\\u0e1f \\/ \\u0e02\\u0e49\\u0e2d\\u0e19 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e40\\u0e2b\\u0e22\\u0e37\\u0e2d\\u0e01\\u0e19\\u0e49\\u0e33\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e01\\u0e34\\u0e19\\u0e02\\u0e49\\u0e32\\u0e27 \\/ \\u0e0b\\u0e49\\u0e2d\\u0e19 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e41\\u0e1a\\u0e48\\u0e07 \\/ \\u0e2a\\u0e49\\u0e2d\\u0e21\\u0e40\\u0e25\\u0e47\\u0e01\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e08\\u0e32\\u0e19\\u0e40\\u0e1b\\u0e25\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e0a\\u0e32\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e49\\u0e27\\u0e22\\u0e41\\u0e1a\\u0e48\\u0e07 \\/ \\u0e0a\\u0e49\\u0e2d\\u0e19\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e49\\u0e27\\u0e22\\u0e19\\u0e49\\u0e33\\u0e08\\u0e34\\u0e49\\u0e21\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e16\\u0e32\\u0e14\\u0e40\\u0e2a\\u0e34\\u0e23\\u0e4c\\u0e1f\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"\\u0e2d\\u0e37\\u0e48\\u0e19\\u0e46\",\"cols\":[\"\"]}]}}",
    "note": null,
    "changed_at": "2026-02-19 13:09:32"
  },
  {
    "id": 5,
    "request_id": 4,
    "action": "cancelled",
    "changed_by": "253",
    "old_data": null,
    "new_data": "{\"status\":\"cancelled\"}",
    "note": null,
    "changed_at": "2026-02-19 13:25:51"
  },
  {
    "id": 6,
    "request_id": 3,
    "action": "cancelled",
    "changed_by": "253",
    "old_data": null,
    "new_data": "{\"status\":\"cancelled\"}",
    "note": null,
    "changed_at": "2026-02-19 13:25:58"
  },
  {
    "id": 7,
    "request_id": 2,
    "action": "cancelled",
    "changed_by": "253",
    "old_data": null,
    "new_data": "{\"status\":\"cancelled\"}",
    "note": null,
    "changed_at": "2026-02-19 13:26:01"
  },
  {
    "id": 8,
    "request_id": 1,
    "action": "cancelled",
    "changed_by": "253",
    "old_data": null,
    "new_data": "{\"status\":\"cancelled\"}",
    "note": null,
    "changed_at": "2026-02-19 13:26:04"
  }
]
```
