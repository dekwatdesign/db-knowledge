# `work_official_travel_quality_audits`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint | NO | PRI | NULL | auto_increment |  |
| travel_id | int | NO | MUL | NULL |  |  |
| audit_status | varchar(30) | NO | MUL | unchecked |  |  |
| error_count | int | NO |  | 0 |  |  |
| note | text | YES |  | NULL |  |  |
| audited_by | int | YES |  | NULL |  |  |
| audited_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_ot_quality_status | audit_status | no | 1 |
| idx_ot_quality_status | audited_at | no | 2 |
| idx_ot_quality_travel | travel_id | no | 1 |
| idx_ot_quality_travel | audited_at | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| travel_id | `work_official_travel.id` | fk_ot_quality_travel |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "travel_id": 1,
    "audit_status": "complete",
    "error_count": 0,
    "note": "Phase 2 legacy data audit: complete.",
    "audited_by": null,
    "audited_at": "2026-06-13 13:55:26"
  },
  {
    "id": 2,
    "travel_id": 2,
    "audit_status": "needs_fix",
    "error_count": 1,
    "note": "Phase 2 legacy data audit: required CQI fields or speaker tracking need review.",
    "audited_by": null,
    "audited_at": "2026-06-13 13:55:26"
  },
  {
    "id": 3,
    "travel_id": 3,
    "audit_status": "needs_fix",
    "error_count": 1,
    "note": "Phase 2 legacy data audit: required CQI fields or speaker tracking need review.",
    "audited_by": null,
    "audited_at": "2026-06-13 13:55:26"
  },
  {
    "id": 4,
    "travel_id": 4,
    "audit_status": "needs_fix",
    "error_count": 1,
    "note": "Phase 2 legacy data audit: required CQI fields or speaker tracking need review.",
    "audited_by": null,
    "audited_at": "2026-06-13 13:55:26"
  },
  {
    "id": 5,
    "travel_id": 5,
    "audit_status": "complete",
    "error_count": 0,
    "note": "Phase 2 legacy data audit: complete.",
    "audited_by": null,
    "audited_at": "2026-06-13 13:55:26"
  },
  {
    "id": 6,
    "travel_id": 6,
    "audit_status": "complete",
    "error_count": 0,
    "note": "Phase 2 legacy data audit: complete.",
    "audited_by": null,
    "audited_at": "2026-06-13 13:55:26"
  },
  {
    "id": 7,
    "travel_id": 7,
    "audit_status": "complete",
    "error_count": 0,
    "note": "Phase 2 legacy data audit: complete.",
    "audited_by": null,
    "audited_at": "2026-06-13 13:55:26"
  },
  {
    "id": 8,
    "travel_id": 8,
    "audit_status": "complete",
    "error_count": 0,
    "note": "Phase 2 legacy data audit: complete.",
    "audited_by": null,
    "audited_at": "2026-06-13 13:55:26"
  }
]
```
