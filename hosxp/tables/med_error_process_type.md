# `med_error_process_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_error_process_type_id | int(11) | NO | PRI | 0 |  |  |
| med_error_process_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_med_error_process_type_name | med_error_process_type_name | yes | 1 |
| PRIMARY | med_error_process_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "med_error_process_type_id": 3,
    "med_error_process_type_name": "ความคลาดเคลื่อนก่อนการจ่ายยา ( Pre-dispensing error)"
  },
  {
    "med_error_process_type_id": 4,
    "med_error_process_type_name": "ความคลาดเคลื่อนการจ่ายยา(Dispensing error)"
  },
  {
    "med_error_process_type_id": 2,
    "med_error_process_type_name": "ความคลาดเคลื่อนในการคัดลอกคำสั่งใช้ยา (Transcribing error )"
  },
  {
    "med_error_process_type_id": 1,
    "med_error_process_type_name": "ความคลาดเคลื่อนในการสั่งใช้ยา (Prescribing error ):"
  },
  {
    "med_error_process_type_id": 5,
    "med_error_process_type_name": "ความคลาดเคลื่อนในการให้หรือบริหารยา ( Administration error )"
  }
]
```
