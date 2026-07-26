# `ipt_summary_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_summary_status_id | int(11) | NO | PRI | 0 |  |  |
| ipt_summary_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_summary_status_name | ipt_summary_status_name | yes | 1 |
| PRIMARY | ipt_summary_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ipt_summary_status_id": 1,
    "ipt_summary_status_name": "รอแพทย์สรุป Chart"
  },
  {
    "ipt_summary_status_id": 2,
    "ipt_summary_status_name": "รอเจ้าหน้าที่เวชระเบียนลงรหัสวินิจฉัยโรค"
  },
  {
    "ipt_summary_status_id": 3,
    "ipt_summary_status_name": "สรุป Chart แล้ว"
  },
  {
    "ipt_summary_status_id": 4,
    "ipt_summary_status_name": "ลงรหัสวินิจฉัยโรคแล้ว"
  },
  {
    "ipt_summary_status_id": 99,
    "ipt_summary_status_name": "คืน Chart แล้ว"
  }
]
```
