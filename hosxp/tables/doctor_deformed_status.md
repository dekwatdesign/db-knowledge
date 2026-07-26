# `doctor_deformed_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_status_id | int(11) | NO | PRI | 0 |  |  |
| doctor_deformed_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_deformed_status_name | doctor_deformed_status_name | yes | 1 |
| PRIMARY | doctor_deformed_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "doctor_deformed_status_id": 1,
    "doctor_deformed_status_name": "ส่งต่อเจ้าหน้าที่เพื่อขอมีบัตรประจำตัวคนพิการตามกฏหมาย"
  },
  {
    "doctor_deformed_status_id": 2,
    "doctor_deformed_status_name": "ส่งต่อเพื่อฟื้นฟูสมรรถภาพทางการศึกษา"
  },
  {
    "doctor_deformed_status_id": 3,
    "doctor_deformed_status_name": "ส่งต่อเพื่อฟื้นฟูสมรรถภาพทางสังคม"
  },
  {
    "doctor_deformed_status_id": 4,
    "doctor_deformed_status_name": "ส่งต่อเพื่อฟื้นฟูสมรรถภาพทางการแพทย์"
  },
  {
    "doctor_deformed_status_id": 5,
    "doctor_deformed_status_name": "ส่งต่อเพื่อฟื้นฟูสมรรถภาพทางอาชีพ"
  },
  {
    "doctor_deformed_status_id": 6,
    "doctor_deformed_status_name": "อื่นๆ"
  }
]
```
