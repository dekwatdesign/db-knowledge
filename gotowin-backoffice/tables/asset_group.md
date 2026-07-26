# `asset_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| GROUP_CODE | varchar(2) | NO | PRI |  |  | รหัสสองหลักแรกของเลขครุภัณฑ์ |
| GROUP_NAME | varchar(60) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | GROUP_CODE | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "GROUP_CODE": "10",
    "GROUP_NAME": "อาวุธ                                             ",
    "ACTIVE": "False"
  },
  {
    "GROUP_CODE": "11",
    "GROUP_NAME": "สรรพาวุธนิวเคลียร์                                ",
    "ACTIVE": "False"
  },
  {
    "GROUP_CODE": "12",
    "GROUP_NAME": "อุปกรณ์ควบคุมการยิง                               ",
    "ACTIVE": "False"
  },
  {
    "GROUP_CODE": "13",
    "GROUP_NAME": "กระสุนและวัตถุระเบิด                              ",
    "ACTIVE": "False"
  },
  {
    "GROUP_CODE": "14",
    "GROUP_NAME": "อาวุธนำวิถี                                       ",
    "ACTIVE": "False"
  },
  {
    "GROUP_CODE": "15",
    "GROUP_NAME": "อากาศยานและองค์ประกอบโครงสร้าง                    ",
    "ACTIVE": "False"
  },
  {
    "GROUP_CODE": "16",
    "GROUP_NAME": "ส่วนประกอบอากาศยานและเครื่องใช้                   ",
    "ACTIVE": "False"
  },
  {
    "GROUP_CODE": "17",
    "GROUP_NAME": "อุปกรณ์การยิงส่ง การลงพื้น และการยกขนทางพื้นดิน   ",
    "ACTIVE": "False"
  }
]
```
