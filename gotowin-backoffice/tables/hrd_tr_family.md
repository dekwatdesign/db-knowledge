# `hrd_tr_family`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | bigint | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(20) | YES |  |  |  |  |
| NAME | varchar(500) | YES |  |  |  |  |
| TYPE | varchar(200) | YES |  |  |  |  |
| CID | varchar(500) | YES |  |  |  |  |
| ADDRESS | varchar(255) | YES |  |  |  |  |
| PHONE | varchar(200) | YES |  |  |  |  |
| IMG1 | longblob | YES |  | NULL |  |  |
| IMG2 | longblob | YES |  | NULL |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| USER_EDIT_ID | int | YES |  | NULL |  |  |
| IMG | longblob | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "PERSON_ID": "63",
    "NAME": "[MASKED_FULLNAME]",
    "TYPE": "บิดา",
    "CID": null,
    "ADDRESS": "237/4 หมู่ 8 ถ.มิตรภาพ ต.หมื่นไวย อ.เมืองนครราชสีมา จ.นครราชสีมา 30000",
    "PHONE": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 63,
    "IMG": null,
    "updated_at": "2020-09-23 15:31:37",
    "created_at": "2020-09-23 15:31:37"
  },
  {
    "ID": 2,
    "PERSON_ID": "63",
    "NAME": "[MASKED_FULLNAME]",
    "TYPE": "มารดา",
    "CID": null,
    "ADDRESS": "237/4 หมู่ 8 ถ.มิตรภาพ ต.หมื่นไวย อ.เมืองนครราชสีมา จ.นครราชสีมา 30000",
    "PHONE": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 63,
    "IMG": null,
    "updated_at": "2020-09-23 15:32:08",
    "created_at": "2020-09-23 15:32:08"
  },
  {
    "ID": 3,
    "PERSON_ID": "63",
    "NAME": "[MASKED_FULLNAME]",
    "TYPE": "น้องชาย",
    "CID": null,
    "ADDRESS": "237/4 หมู่ 8 ถ.มิตรภาพ ต.หมื่นไวย อ.เมืองนครราชสีมา จ.นครราชสีมา 30000",
    "PHONE": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 63,
    "IMG": null,
    "updated_at": "2020-09-23 15:32:41",
    "created_at": "2020-09-23 15:32:41"
  },
  {
    "ID": 4,
    "PERSON_ID": "63",
    "NAME": "[MASKED_FULLNAME]",
    "TYPE": "น้องชาย",
    "CID": null,
    "ADDRESS": "237/4 หมู่ 8 ถ.มิตรภาพ ต.หมื่นไวย อ.เมืองนครราชสีมา จ.นครราชสีมา 30000",
    "PHONE": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 63,
    "IMG": null,
    "updated_at": "2020-09-23 15:33:08",
    "created_at": "2020-09-23 15:33:08"
  },
  {
    "ID": 5,
    "PERSON_ID": "33",
    "NAME": "[MASKED_FULLNAME]",
    "TYPE": "มารดา",
    "CID": "1xxxxxxxxxxxx",
    "ADDRESS": "710/36 ม. 5 ซอยจัดสรรอุดมเดช ต.ท้ายบ้านใหม่ อ.เมือง จ.สมุทรปราการ",
    "PHONE": "0809656489",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 33,
    "IMG": null,
    "updated_at": "2020-09-25 06:33:50",
    "created_at": "2020-09-25 06:33:50"
  },
  {
    "ID": 6,
    "PERSON_ID": "33",
    "NAME": "[MASKED_FULLNAME]",
    "TYPE": "หลาน",
    "CID": "1xxxxxxxxxxxx",
    "ADDRESS": "710/36 ม. 5 ซอยจัดสรรอุดมเดช ต.ท้ายบ้านใหม่ อ.เมือง จ.สมุทรปราการ",
    "PHONE": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 33,
    "IMG": null,
    "updated_at": "2020-09-25 06:35:38",
    "created_at": "2020-09-25 06:35:38"
  },
  {
    "ID": 7,
    "PERSON_ID": "70",
    "NAME": "[MASKED_FULLNAME]",
    "TYPE": "บุตรชาย",
    "CID": "1xxxxxxxxxxxx",
    "ADDRESS": "25 หมู่ 9 ต.บางเมืองใหม่ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270",
    "PHONE": "0953563545",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 70,
    "IMG": null,
    "updated_at": "2020-09-28 03:32:17",
    "created_at": "2020-09-28 03:32:17"
  },
  {
    "ID": 8,
    "PERSON_ID": "70",
    "NAME": "[MASKED_FULLNAME]",
    "TYPE": "บุตรชาย",
    "CID": "1xxxxxxxxxxxx",
    "ADDRESS": "25 หมู่ 9 ต.บางเมืองใหม่ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270",
    "PHONE": "0835978824",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 70,
    "IMG": null,
    "updated_at": "2020-09-28 03:35:49",
    "created_at": "2020-09-28 03:35:49"
  }
]
```
