# `drp_cause_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_cause_group_code | varchar(5) | NO | PRI |  |  |  |
| drp_cause_group_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_cause_group_name | drp_cause_group_name | yes | 1 |
| PRIMARY | drp_cause_group_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drp_cause_group_code": "C1",
    "drp_cause_group_name": "การเลือกใช้ยา (Drug selection)"
  },
  {
    "drp_cause_group_code": "C2",
    "drp_cause_group_name": "รูปแบบยา (Drug form)"
  },
  {
    "drp_cause_group_code": "C3",
    "drp_cause_group_name": "การเลือกขนาดใช้ยา (Dose selection)"
  },
  {
    "drp_cause_group_code": "C4",
    "drp_cause_group_name": "ระยะเวลาการรักษา (Treatment duration)"
  },
  {
    "drp_cause_group_code": "C5",
    "drp_cause_group_name": "การจ่ายยา (dispensing)"
  },
  {
    "drp_cause_group_code": "C6",
    "drp_cause_group_name": "กระบวนการใช้ยา (Drug use process)"
  },
  {
    "drp_cause_group_code": "C7",
    "drp_cause_group_name": "ผู้ป่วย (Patient)"
  },
  {
    "drp_cause_group_code": "C8",
    "drp_cause_group_name": "อื่นๆ (Other)"
  }
]
```
