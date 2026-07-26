# `hrd_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_TEAM_ID | int | NO | PRI | NULL | auto_increment |  |
| HR_TEAM_NAME | varchar(100) | YES |  |  |  |  |
| HR_TEAM_DETAIL | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_TEAM_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HR_TEAM_ID": 1,
    "HR_TEAM_NAME": "YCAP",
    "HR_TEAM_DETAIL": "คณะกรรมการบริหารโรงพยาบาล",
    "updated_at": "2020-03-05 02:17:36",
    "created_at": null
  },
  {
    "HR_TEAM_ID": 2,
    "HR_TEAM_NAME": "IC",
    "HR_TEAM_DETAIL": "คณะกรรมการการป้องกันและควบคุมการติดเชื้อในโรงพยาบาล (IC)",
    "updated_at": "2020-03-05 02:20:57",
    "created_at": null
  },
  {
    "HR_TEAM_ID": 3,
    "HR_TEAM_NAME": "NSO",
    "HR_TEAM_DETAIL": "คณะกรรมการทีมนำทางการพยาบาล (NSO)",
    "updated_at": "2020-03-05 02:21:09",
    "created_at": null
  },
  {
    "HR_TEAM_ID": 4,
    "HR_TEAM_NAME": "FA",
    "HR_TEAM_DETAIL": "คณะกรรมการประสานงานพัฒนาคุณภาพโรงพยาบาล (FA)",
    "updated_at": "2020-03-05 02:21:23",
    "created_at": null
  },
  {
    "HR_TEAM_ID": 19,
    "HR_TEAM_NAME": "P4P",
    "HR_TEAM_DETAIL": "คณะกรรมการการจ่ายค่าตอบแทนตามผลการปฎิบัติงาน (P4P)",
    "updated_at": "2020-03-05 02:31:56",
    "created_at": null
  },
  {
    "HR_TEAM_ID": 6,
    "HR_TEAM_NAME": "RM",
    "HR_TEAM_DETAIL": "คณะกรรมการพัฒนาคุณภาพความปลอดภัยในโรงพยาบาล (RM)",
    "updated_at": "2020-03-05 02:21:33",
    "created_at": null
  },
  {
    "HR_TEAM_ID": 7,
    "HR_TEAM_NAME": "HRD",
    "HR_TEAM_DETAIL": "คณะกรรมการพัฒนาทรัพยากรบุคคล (HRD)",
    "updated_at": "2020-03-05 02:20:40",
    "created_at": null
  },
  {
    "HR_TEAM_ID": 8,
    "HR_TEAM_NAME": "PCT",
    "HR_TEAM_DETAIL": "คณะกรรมการพัฒนาระบบบริการผู้ป่วย (PCT)",
    "updated_at": "2020-03-05 02:21:56",
    "created_at": null
  }
]
```
