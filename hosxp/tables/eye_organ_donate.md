# `eye_organ_donate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| eye_organ_donated_organ | char(1) | YES |  | NULL |  |  |
| eye_organ_donated_eye | char(1) | YES |  | NULL |  |  |
| eye_organ_donated_body | char(1) | YES |  | NULL |  |  |
| eye_organ_donate_leye_operate | char(1) | YES |  | NULL |  |  |
| eye_organ_donate_reye_operate | char(1) | YES |  | NULL |  |  |
| eye_organ_donate_remark | text | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| sync_locked_at | datetime | YES | MUL | NULL |  |  |
| sync_locked_by | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_eye_organ_donate_doctor_code | doctor_code | no | 1 |
| ix_idx_eye_organ_donate_last_update | last_update | no | 1 |
| ix_idx_eye_organ_donate_sync_locked_at | sync_locked_at | no | 1 |
| ix_idx_eye_organ_donate_sync_locked_by | sync_locked_by | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "470000013",
    "eye_organ_donated_organ": null,
    "eye_organ_donated_eye": null,
    "eye_organ_donated_body": null,
    "eye_organ_donate_leye_operate": null,
    "eye_organ_donate_reye_operate": null,
    "eye_organ_donate_remark": null,
    "doctor_code": "SYSTEM",
    "last_update": null,
    "sync_locked_at": "2026-04-25 14:07:50",
    "sync_locked_by": "A56-0114"
  },
  {
    "hn": "530000143",
    "eye_organ_donated_organ": null,
    "eye_organ_donated_eye": null,
    "eye_organ_donated_body": null,
    "eye_organ_donate_leye_operate": null,
    "eye_organ_donate_reye_operate": null,
    "eye_organ_donate_remark": null,
    "doctor_code": "SYSTEM",
    "last_update": null,
    "sync_locked_at": "2026-04-25 14:07:50",
    "sync_locked_by": "A56-0114"
  },
  {
    "hn": "530000145",
    "eye_organ_donated_organ": null,
    "eye_organ_donated_eye": null,
    "eye_organ_donated_body": null,
    "eye_organ_donate_leye_operate": null,
    "eye_organ_donate_reye_operate": null,
    "eye_organ_donate_remark": null,
    "doctor_code": "SYSTEM",
    "last_update": null,
    "sync_locked_at": "2026-04-25 14:07:50",
    "sync_locked_by": "A56-0114"
  },
  {
    "hn": "530000146",
    "eye_organ_donated_organ": null,
    "eye_organ_donated_eye": null,
    "eye_organ_donated_body": null,
    "eye_organ_donate_leye_operate": null,
    "eye_organ_donate_reye_operate": null,
    "eye_organ_donate_remark": null,
    "doctor_code": "SYSTEM",
    "last_update": null,
    "sync_locked_at": "2026-04-25 14:07:50",
    "sync_locked_by": "A56-0114"
  },
  {
    "hn": "530000148",
    "eye_organ_donated_organ": null,
    "eye_organ_donated_eye": null,
    "eye_organ_donated_body": null,
    "eye_organ_donate_leye_operate": null,
    "eye_organ_donate_reye_operate": null,
    "eye_organ_donate_remark": null,
    "doctor_code": "SYSTEM",
    "last_update": null,
    "sync_locked_at": "2026-04-25 14:07:50",
    "sync_locked_by": "A56-0114"
  },
  {
    "hn": "530000149",
    "eye_organ_donated_organ": null,
    "eye_organ_donated_eye": null,
    "eye_organ_donated_body": null,
    "eye_organ_donate_leye_operate": null,
    "eye_organ_donate_reye_operate": null,
    "eye_organ_donate_remark": null,
    "doctor_code": "SYSTEM",
    "last_update": null,
    "sync_locked_at": "2026-04-25 14:07:50",
    "sync_locked_by": "A56-0114"
  },
  {
    "hn": "530000150",
    "eye_organ_donated_organ": null,
    "eye_organ_donated_eye": null,
    "eye_organ_donated_body": null,
    "eye_organ_donate_leye_operate": null,
    "eye_organ_donate_reye_operate": null,
    "eye_organ_donate_remark": null,
    "doctor_code": "SYSTEM",
    "last_update": null,
    "sync_locked_at": "2026-04-25 14:07:50",
    "sync_locked_by": "A56-0114"
  },
  {
    "hn": "530000151",
    "eye_organ_donated_organ": null,
    "eye_organ_donated_eye": null,
    "eye_organ_donated_body": null,
    "eye_organ_donate_leye_operate": null,
    "eye_organ_donate_reye_operate": null,
    "eye_organ_donate_remark": null,
    "doctor_code": "SYSTEM",
    "last_update": null,
    "sync_locked_at": "2026-04-25 14:07:50",
    "sync_locked_by": "A56-0114"
  }
]
```
