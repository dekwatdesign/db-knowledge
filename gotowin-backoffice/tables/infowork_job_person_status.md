# `infowork_job_person_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IWJOB_PERSON_STATUS_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| IWJPS_NAME | varchar(255) | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | IWJOB_PERSON_STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "IWJOB_PERSON_STATUS_ID": 1,
    "IWJPS_NAME": "รอดำเนินการ"
  },
  {
    "IWJOB_PERSON_STATUS_ID": 2,
    "IWJPS_NAME": "ประเมินผล 6 เดือนแรก"
  },
  {
    "IWJOB_PERSON_STATUS_ID": 3,
    "IWJPS_NAME": "ประเมินผล 6 เดือนหลัง"
  }
]
```
