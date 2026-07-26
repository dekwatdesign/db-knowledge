# `epidem_covid_risk_his`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epidem_covid_risk_his_id | int(11) | NO | PRI | 0 |  |  |
| epidem_covid_risk_his_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | epidem_covid_risk_his_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "epidem_covid_risk_his_id": 1,
    "epidem_covid_risk_his_name": "ทำงานในโรงพยาบาล/คลินิก"
  },
  {
    "epidem_covid_risk_his_id": 2,
    "epidem_covid_risk_his_name": "ทำงานในโรงงาน/สถานประกอบการ/ประมง/การเกษตร ที่มีพนักงานตั้งแต่ 50 คนขึ้นไป"
  },
  {
    "epidem_covid_risk_his_id": 3,
    "epidem_covid_risk_his_name": "ทำงานในตลาด/ไปตลาดเป็นประจำ"
  },
  {
    "epidem_covid_risk_his_id": 4,
    "epidem_covid_risk_his_name": "ทำงานในแคมป์ก่อสร้าง"
  },
  {
    "epidem_covid_risk_his_id": 5,
    "epidem_covid_risk_his_name": "ผู้ต้องขังในเรือนจำ/ทัณฑสถาน"
  },
  {
    "epidem_covid_risk_his_id": 6,
    "epidem_covid_risk_his_name": "อยู่ในศูนย์พักพิงชั่วคราว/ศูนย์กักกัน"
  },
  {
    "epidem_covid_risk_his_id": 7,
    "epidem_covid_risk_his_name": "มาจากต่างประเทศ (เข้าประเทศอย่างถูกกฎหมาย)"
  },
  {
    "epidem_covid_risk_his_id": 8,
    "epidem_covid_risk_his_name": "มาจากต่างประเทศ (ลักลอบเข้าประเทศ)"
  }
]
```
