# `ptnote`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ptnote_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| noteflag | varchar(250) | YES |  | NULL |  |  |
| ptnote | text | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| groupname | varchar(250) | YES |  | NULL |  |  |
| plain_text | text | YES |  | NULL |  |  |
| prsc_note_text | varchar(250) | YES |  | NULL |  |  |
| note_datetime | datetime | YES |  | NULL |  |  |
| note_staff | varchar(25) | YES |  | NULL |  |  |
| username_list | text | YES |  | NULL |  |  |
| has_expired | char(1) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| public_note | char(1) | YES |  | NULL |  |  |
| encrypt_note | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| show_all_dep | char(1) | YES |  | NULL |  |  |
| check_group | char(1) | YES |  | NULL |  |  |
| ptnote_html | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ptnote_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ptnote_id": 1,
    "hn": "530123053",
    "noteflag": "[OPDCARD][DOCTOR][RX][IPD][IPDRX]",
    "ptnote": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs26\\'e1\\'be\\'e9\\'cd\\'d2\\'cb\\'d2\\'c3\\'b7\\'d0\\'e0\\'c5\\'e0\\'c7\\'c5\\'d2\\'a1\\'d4\\'b9\\'c1\\'d5\\'cd\\'d2\\'a1\\'d2\\'c3\\'a4\\'d1\\'b9\\par\r\n}\r\n\u0000",
    "vstdate": null,
    "vsttime": null,
    "groupname": "",
    "plain_text": "แพ้อาหารทะเลเวลากินมีอาการคัน\r\n",
    "prsc_note_text": null,
    "note_datetime": "2011-10-09 15:55:41",
    "note_staff": "yuwa046",
    "username_list": null,
    "has_expired": null,
    "expire_date": null,
    "public_note": "Y",
    "encrypt_note": null,
    "hos_guid": null,
    "show_all_dep": null,
    "check_group": null,
    "ptnote_html": null
  },
  {
    "ptnote_id": 2,
    "hn": "530218852",
    "noteflag": "[OPDCARD][DOCTOR][RX][IPD][IPDRX]",
    "ptnote": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs26\\'e0\\'c5\\'d7\\'cd\\'b4\\'a1\\'d3\\'e0\\'b4\\'d2\\'e4\\'cb\\'c5\\'ba\\'e8\\'cd\\'c2\\'e4\\'c1\\'e8\\'b7\\'c3\\'d2\\'ba\\'ca\\'d2\\'e0\\'cb\\'b5\\'d8\\par\r\n}\r\n\u0000",
    "vstdate": null,
    "vsttime": null,
    "groupname": "",
    "plain_text": "เลือดกำเดาไหลบ่อยไม่ทราบสาเหตุ\r\n",
    "prsc_note_text": null,
    "note_datetime": "2011-10-09 17:56:51",
    "note_staff": "yuwa046",
    "username_list": null,
    "has_expired": null,
    "expire_date": null,
    "public_note": "Y",
    "encrypt_note": null,
    "hos_guid": null,
    "show_all_dep": null,
    "check_group": null,
    "ptnote_html": null
  },
  {
    "ptnote_id": 5,
    "hn": "540001696",
    "noteflag": "[OPDCARD][FINANCE]",
    "ptnote": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs26\\'a4\\'e8\\'d2\\'ba\\'c3\\'d4\\'a1\\'d2\\'c3\\'a4\\'e9\\'d2\\'a7\\'aa\\'d3\\'c3\\'d0\\'a8\\'d2\\'a1\\'cb\\'e9\\'cd\\'a7\\'e0\\'c7\\'aa\\'c3\\'d0\\'e0\\'ba\\'d5\\'c2\\'b9 50 \\'ba\\'d2\\'b7\\par\r\n\\'a4\\'e8\\'d2\\'ba\\'d1\\'b5\\'c3\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'e3\\'cb\\'c1\\'e8 20 \\'ba\\'d2\\'b7\\par\r\n}\r\n\u0000",
    "vstdate": null,
    "vsttime": null,
    "groupname": "",
    "plain_text": "ค่าบริการค้างชำระจากห้องเวชระเบียน 50 บาท\r\nค่าบัตรผู้ป่วยใหม่ 20 บาท\r\n",
    "prsc_note_text": null,
    "note_datetime": "2011-10-10 08:58:53",
    "note_staff": "yuwa152",
    "username_list": null,
    "has_expired": "Y",
    "expire_date": "2011-10-10",
    "public_note": "Y",
    "encrypt_note": null,
    "hos_guid": null,
    "show_all_dep": null,
    "check_group": null,
    "ptnote_html": null
  },
  {
    "ptnote_id": 7,
    "hn": "540001703",
    "noteflag": "[OPDCARD][DOCTOR][RX][IPD][IPDRX]",
    "ptnote": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs26\\'c1\\'d5\\'bc\\'d7\\'e8\\'b9\\'a4\\'d1\\'b9\\'e0\\'c7\\'c5\\'d2\\'c3\\'d1\\'ba\\'bb\\'c3\\'d0\\'b7\\'d2\\'b9\\'cd\\'d2\\'cb\\'d2\\'c3\\'b7\\'d0\\'e0\\'c5 / \\'b9\\'e9\\'d3\\'cd\\'d1\\'b4\\'c5\\'c1\\par\r\n}\r\n\u0000",
    "vstdate": null,
    "vsttime": null,
    "groupname": "",
    "plain_text": "มีผื่นคันเวลารับประทานอาหารทะเล / น้ำอัดลม\r\n",
    "prsc_note_text": null,
    "note_datetime": "2011-10-11 17:23:15",
    "note_staff": "yuwa046",
    "username_list": null,
    "has_expired": null,
    "expire_date": null,
    "public_note": "Y",
    "encrypt_note": null,
    "hos_guid": null,
    "show_all_dep": null,
    "check_group": null,
    "ptnote_html": null
  },
  {
    "ptnote_id": 8,
    "hn": "530031348",
    "noteflag": "[OPDCARD][SCREEN]",
    "ptnote": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\lang1033\\f0\\fs26 Burden Stress test 8\\lang1054\\'c3\\'d1\\'e9\\'a7\\'b5\\'e8\\'cd\\'e4\\'bb\\'e0\\'b4\\'d7\\'cd\\'b9\\'e0\\'c1\\'c9\\'d2\\'c2\\'b9 2555\\par\r\n}\r\n\u0000",
    "vstdate": null,
    "vsttime": null,
    "groupname": "",
    "plain_text": "Burden Stress test 8รั้งต่อไปเดือนเมษายน 2555\r\n",
    "prsc_note_text": null,
    "note_datetime": "2011-10-12 11:35:49",
    "note_staff": "yuwa098",
    "username_list": null,
    "has_expired": null,
    "expire_date": null,
    "public_note": "Y",
    "encrypt_note": null,
    "hos_guid": null,
    "show_all_dep": null,
    "check_group": null,
    "ptnote_html": null
  },
  {
    "ptnote_id": 12,
    "hn": "530103554",
    "noteflag": "[OPDCARD][FINANCE]",
    "ptnote": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs26\\'e3\\'cb\\'e9\\'c5\\'ba\\'a4\\'e8\\'d2\\'ba\\'c3\\'d4\\'a1\\'d2\\'c3\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'b9\\'cd\\'a1\\'b4\\'e9\\'c7\\'c2\\'a4\\'e8\\'d0\\'e0\\'be\\'c3\\'d2\\'d0\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2\\'c1\\'d2\\'c3\\'d1\\'ba\\'ba\\'c3\\'d4\\'a1\\'d2\\'c3\\'a8\\'d4\\'b5\\'c7\\'d4\\'b7\\'c2\\'d2\\'e1\\'c5\\'e9\\'c7\\par\r\n}\r\n\u0000",
    "vstdate": null,
    "vsttime": null,
    "groupname": "",
    "plain_text": "ให้ลบค่าบริการผู้ป่วยนอกด้วยค่ะเพราะผู้ป่วยมารับบริการจิตวิทยาแล้ว\r\n",
    "prsc_note_text": null,
    "note_datetime": "2011-10-13 11:30:41",
    "note_staff": "yuwa133",
    "username_list": null,
    "has_expired": null,
    "expire_date": null,
    "public_note": "Y",
    "encrypt_note": null,
    "hos_guid": null,
    "show_all_dep": null,
    "check_group": null,
    "ptnote_html": null
  },
  {
    "ptnote_id": 14,
    "hn": "530102954",
    "noteflag": "[OPDCARD]",
    "ptnote": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs26\\'e0\\'b4\\'e7\\'a1\\lang1033 PDD\\lang1054\\'e4\\'c1\\'e8\\'e0\\'ca\\'d5\\'c2\\'a4\\'e8\\'d2\\'e3\\'aa\\'e9\\'a8\\'e8\\'d2\\'c2\\par\r\n\\par\r\n}\r\n\u0000",
    "vstdate": null,
    "vsttime": null,
    "groupname": "",
    "plain_text": "เด็กPDDไม่เสียค่าใช้จ่าย\r\n",
    "prsc_note_text": null,
    "note_datetime": "2011-10-14 10:48:47",
    "note_staff": "yuwa156",
    "username_list": null,
    "has_expired": null,
    "expire_date": null,
    "public_note": "Y",
    "encrypt_note": null,
    "hos_guid": null,
    "show_all_dep": null,
    "check_group": null,
    "ptnote_html": null
  },
  {
    "ptnote_id": 15,
    "hn": "530104354",
    "noteflag": "[OPDCARD]",
    "ptnote": "{\\rtf1\\ansi\\ansicpg874\\deff0{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\lang1054\\f0\\fs26\\'e0\\'b4\\'e7\\'a1\\lang1033 PDD\\lang1054\\'e4\\'c1\\'e8\\'e0\\'ca\\'d5\\'c2\\'a4\\'e8\\'d2\\'e3\\'aa\\'e9\\'a8\\'e8\\'d2\\'c2\\par\r\n\\par\r\n}\r\n\u0000",
    "vstdate": null,
    "vsttime": null,
    "groupname": "",
    "plain_text": "เด็กPDDไม่เสียค่าใช้จ่าย\r\n",
    "prsc_note_text": null,
    "note_datetime": "2011-10-14 10:59:03",
    "note_staff": "yuwa156",
    "username_list": null,
    "has_expired": null,
    "expire_date": null,
    "public_note": "Y",
    "encrypt_note": null,
    "hos_guid": null,
    "show_all_dep": null,
    "check_group": null,
    "ptnote_html": null
  }
]
```
