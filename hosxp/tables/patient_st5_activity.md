# `patient_st5_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_st5_activity_id | int(11) | NO | PRI | 0 |  |  |
| patient_st5_activity_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_st5_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "patient_st5_activity_id": 1,
    "patient_st5_activity_name": "มีปัญหาการนอน นอนไม่หลับหรือนอนมาก"
  },
  {
    "patient_st5_activity_id": 2,
    "patient_st5_activity_name": "มีสมาธิน้อยลง"
  },
  {
    "patient_st5_activity_id": 3,
    "patient_st5_activity_name": "หงุดหงิด / กระวนกระวาย / ว้าวุ่นใจ"
  },
  {
    "patient_st5_activity_id": 4,
    "patient_st5_activity_name": "รู้สึกเบื่อ เซ็ง"
  },
  {
    "patient_st5_activity_id": 5,
    "patient_st5_activity_name": "ไม่อยากพบปะผู้คน"
  }
]
```
