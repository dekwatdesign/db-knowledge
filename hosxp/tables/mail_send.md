# `mail_send`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| mail_id | int(11) | NO | PRI | 0 |  |  |
| mail_from | varchar(250) | YES | MUL | NULL |  |  |
| mail_recipient | varchar(250) | YES | MUL | NULL |  |  |
| mail_subject | varchar(250) | YES | MUL | NULL |  |  |
| mail_body | longtext | YES |  | NULL |  |  |
| mail_read | char(1) | YES |  | NULL |  |  |
| mail_send_datetime | datetime | YES | MUL | NULL |  |  |
| mail_read_datetime | datetime | YES |  | NULL |  |  |
| mail_priority | int(11) | YES |  | NULL |  |  |
| has_attachment | char(1) | YES |  | NULL |  |  |
| attachment | longblob | YES |  | NULL |  |  |
| attachment_id | int(11) | YES |  | NULL |  |  |
| attachment_open | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| mail_from | mail_from | no | 1 |
| mail_recipient | mail_recipient | no | 1 |
| mail_send_datetime | mail_send_datetime | no | 1 |
| mail_subject | mail_subject | no | 1 |
| PRIMARY | mail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "mail_id": 3,
    "mail_from": "yuwa029",
    "mail_recipient": "yuwa009",
    "mail_subject": "",
    "mail_body": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222 AngsanaUPC;}{\\f1\\fnil\\fcharset0 AngsanaUPC;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs36\\'cb\\'c1\\'cd\\'e1\\'a8\\'b9\\'a4\\'d0\\par\r\n\\lang1033\\f1 order lab \\lang1054\\f0\\'e0\\'bb\\'e7\\'b9\\'a2\\'cd\\'a7\\'c7\\'d1\\'b9\\'e4\\'cb\\'b9\\'a4\\'d0\\par\r\n}\r\n\u0000",
    "mail_read": "N",
    "mail_send_datetime": "2012-04-02 10:58:40",
    "mail_read_datetime": null,
    "mail_priority": 0,
    "has_attachment": null,
    "attachment": null,
    "attachment_id": 0,
    "attachment_open": null,
    "hos_guid": null
  },
  {
    "mail_id": 5,
    "mail_from": "chatchawal",
    "mail_recipient": "bms",
    "mail_subject": "เลื่อนนัดตรวจ LAB",
    "mail_body": "{\\rtf1\\fbidis\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fswiss\\fprq2\\fcharset222 TH SarabunPSK;}{\\f1\\fswiss\\fprq2\\fcharset0 TH SarabunPSK;}{\\f2\\froman\\fprq2\\fcharset0 AngsanaUPC;}{\\f3\\fnil\\fcharset222 AngsanaUPC;}}\r\n\\viewkind4\\uc1\\pard\\ltrpar\\b\\f0\\fs28\\'e0\\'c3\\'d7\\'e8\\'cd\\'a7\\lang1033\\f1    \\lang1054\\f0\\'a2\\'cd\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'b5\\'c3\\'c7\\'a8\\lang1033\\f1  LAB\\lang1054  \\par\r\n\\f0\\'e0\\'c3\\'d5\\'c2\\'b9\\lang1033\\f1  \\lang1054\\f0   \\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\'b7\\'d5\\'e8\\'e0\\'a1\\'d5\\'e8\\'c2\\'c7\\'a2\\'e9\\'cd\\'a7\\'b7\\'d8\\'a1\\'b7\\'e8\\'d2\\'b9\\lang1033\\f1\\par\r\n\\pard\\ltrpar\\qj\\b0\\par\r\n\\pard\\ltrpar\\lang1054\\f0            \\'e0\\'b9\\'d7\\'e8\\'cd\\'a7\\'a8\\'d2\\'a1\\lang1033\\f1  \\lang1054\\f0\\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\lang1033\\f1  LAB \\lang1054\\f0\\'c1\\'d5\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'e0\\'b4\\'d4\\'b9\\'b7\\'d2\\'a7\\'e4\\'bb\\'c3\\'d2\\'aa\\'a1\\'d2\\'c3 \\'c3\\'d0\\'cb\\'c7\\'e8\\'d2\\'a7 \\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 22-26 \\'e0\\'c1\\'c9\\'d2\\'c2\\'b9 2555 \\'e1\\'c5\\'d0\\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 16-18 \\'be\\'c4\\'c9\\'c0\\'d2\\'a4\\'c1 2555\\f2\\par\r\n\\pard\\ltrpar\\qj\\f1\\par\r\n\\pard\\ltrpar        \\f0     \\'a8\\'d6\\'a7\\'e0\\'c3\\'d5\\'c2\\'b9\\'c1\\'d2\\'e0\\'be\\'d7\\'e8\\'cd\\'be\\'d4\\'a8\\'d2\\'c3\\'b3\\'d2\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2 \\'cb\\'c3\\'d7\\'cd\\'ca\\'e8\\'a7\\'b5\\'c3\\'c7\\'a8 \\lang1033\\f1 LAB \\lang1054\\f0\\'b9\\'cd\\'a1 \\'b5\\'d2\\'c1\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'b7\\'d5\\'e8\\'e1\\'a8\\'e9\\'a7\\lang1033\\f1\\par\r\n\\par\r\n\\pard\\ltrpar\\qc\\lang1054\\b\\f0\\'a7\\'d2\\'b9\\'ca\\'d2\\'c3\\'ca\\'b9\\'e0\\'b7\\'c8\\lang1033\\f1\\par\r\n\\lang1054 72152\\lang1033 , \\lang1054 72143\\par\r\n\\b0\\f3\\fs36\\par\r\n\\pard\\ltrpar\\par\r\n}\r\n\u0000",
    "mail_read": "Y",
    "mail_send_datetime": "2012-04-05 08:50:39",
    "mail_read_datetime": null,
    "mail_priority": 0,
    "has_attachment": null,
    "attachment": null,
    "attachment_id": 0,
    "attachment_open": null,
    "hos_guid": null
  },
  {
    "mail_id": 7,
    "mail_from": "chatchawal",
    "mail_recipient": "replication",
    "mail_subject": "เลื่อนนัดตรวจ LAB",
    "mail_body": "{\\rtf1\\fbidis\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fswiss\\fprq2\\fcharset222 TH SarabunPSK;}{\\f1\\fswiss\\fprq2\\fcharset0 TH SarabunPSK;}{\\f2\\froman\\fprq2\\fcharset0 AngsanaUPC;}{\\f3\\fnil\\fcharset222 AngsanaUPC;}}\r\n\\viewkind4\\uc1\\pard\\ltrpar\\b\\f0\\fs28\\'e0\\'c3\\'d7\\'e8\\'cd\\'a7\\lang1033\\f1    \\lang1054\\f0\\'a2\\'cd\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'b5\\'c3\\'c7\\'a8\\lang1033\\f1  LAB\\lang1054  \\par\r\n\\f0\\'e0\\'c3\\'d5\\'c2\\'b9\\lang1033\\f1  \\lang1054\\f0   \\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\'b7\\'d5\\'e8\\'e0\\'a1\\'d5\\'e8\\'c2\\'c7\\'a2\\'e9\\'cd\\'a7\\'b7\\'d8\\'a1\\'b7\\'e8\\'d2\\'b9\\lang1033\\f1\\par\r\n\\pard\\ltrpar\\qj\\b0\\par\r\n\\pard\\ltrpar\\lang1054\\f0            \\'e0\\'b9\\'d7\\'e8\\'cd\\'a7\\'a8\\'d2\\'a1\\lang1033\\f1  \\lang1054\\f0\\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\lang1033\\f1  LAB \\lang1054\\f0\\'c1\\'d5\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'e0\\'b4\\'d4\\'b9\\'b7\\'d2\\'a7\\'e4\\'bb\\'c3\\'d2\\'aa\\'a1\\'d2\\'c3 \\'c3\\'d0\\'cb\\'c7\\'e8\\'d2\\'a7 \\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 22-26 \\'e0\\'c1\\'c9\\'d2\\'c2\\'b9 2555 \\'e1\\'c5\\'d0\\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 16-18 \\'be\\'c4\\'c9\\'c0\\'d2\\'a4\\'c1 2555\\f2\\par\r\n\\pard\\ltrpar\\qj\\f1\\par\r\n\\pard\\ltrpar        \\f0     \\'a8\\'d6\\'a7\\'e0\\'c3\\'d5\\'c2\\'b9\\'c1\\'d2\\'e0\\'be\\'d7\\'e8\\'cd\\'be\\'d4\\'a8\\'d2\\'c3\\'b3\\'d2\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2 \\'cb\\'c3\\'d7\\'cd\\'ca\\'e8\\'a7\\'b5\\'c3\\'c7\\'a8 \\lang1033\\f1 LAB \\lang1054\\f0\\'b9\\'cd\\'a1 \\'b5\\'d2\\'c1\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'b7\\'d5\\'e8\\'e1\\'a8\\'e9\\'a7\\lang1033\\f1\\par\r\n\\par\r\n\\pard\\ltrpar\\qc\\lang1054\\b\\f0\\'a7\\'d2\\'b9\\'ca\\'d2\\'c3\\'ca\\'b9\\'e0\\'b7\\'c8\\lang1033\\f1\\par\r\n\\lang1054 72152\\lang1033 , \\lang1054 72143\\par\r\n\\b0\\f3\\fs36\\par\r\n\\pard\\ltrpar\\par\r\n}\r\n\u0000",
    "mail_read": "Y",
    "mail_send_datetime": "2012-04-05 08:50:39",
    "mail_read_datetime": null,
    "mail_priority": 0,
    "has_attachment": null,
    "attachment": null,
    "attachment_id": 0,
    "attachment_open": null,
    "hos_guid": null
  },
  {
    "mail_id": 8,
    "mail_from": "chatchawal",
    "mail_recipient": "Sineenart",
    "mail_subject": "เลื่อนนัดตรวจ LAB",
    "mail_body": "{\\rtf1\\fbidis\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fswiss\\fprq2\\fcharset222 TH SarabunPSK;}{\\f1\\fswiss\\fprq2\\fcharset0 TH SarabunPSK;}{\\f2\\froman\\fprq2\\fcharset0 AngsanaUPC;}{\\f3\\fnil\\fcharset222 AngsanaUPC;}}\r\n\\viewkind4\\uc1\\pard\\ltrpar\\b\\f0\\fs28\\'e0\\'c3\\'d7\\'e8\\'cd\\'a7\\lang1033\\f1    \\lang1054\\f0\\'a2\\'cd\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'b5\\'c3\\'c7\\'a8\\lang1033\\f1  LAB\\lang1054  \\par\r\n\\f0\\'e0\\'c3\\'d5\\'c2\\'b9\\lang1033\\f1  \\lang1054\\f0   \\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\'b7\\'d5\\'e8\\'e0\\'a1\\'d5\\'e8\\'c2\\'c7\\'a2\\'e9\\'cd\\'a7\\'b7\\'d8\\'a1\\'b7\\'e8\\'d2\\'b9\\lang1033\\f1\\par\r\n\\pard\\ltrpar\\qj\\b0\\par\r\n\\pard\\ltrpar\\lang1054\\f0            \\'e0\\'b9\\'d7\\'e8\\'cd\\'a7\\'a8\\'d2\\'a1\\lang1033\\f1  \\lang1054\\f0\\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\lang1033\\f1  LAB \\lang1054\\f0\\'c1\\'d5\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'e0\\'b4\\'d4\\'b9\\'b7\\'d2\\'a7\\'e4\\'bb\\'c3\\'d2\\'aa\\'a1\\'d2\\'c3 \\'c3\\'d0\\'cb\\'c7\\'e8\\'d2\\'a7 \\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 22-26 \\'e0\\'c1\\'c9\\'d2\\'c2\\'b9 2555 \\'e1\\'c5\\'d0\\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 16-18 \\'be\\'c4\\'c9\\'c0\\'d2\\'a4\\'c1 2555\\f2\\par\r\n\\pard\\ltrpar\\qj\\f1\\par\r\n\\pard\\ltrpar        \\f0     \\'a8\\'d6\\'a7\\'e0\\'c3\\'d5\\'c2\\'b9\\'c1\\'d2\\'e0\\'be\\'d7\\'e8\\'cd\\'be\\'d4\\'a8\\'d2\\'c3\\'b3\\'d2\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2 \\'cb\\'c3\\'d7\\'cd\\'ca\\'e8\\'a7\\'b5\\'c3\\'c7\\'a8 \\lang1033\\f1 LAB \\lang1054\\f0\\'b9\\'cd\\'a1 \\'b5\\'d2\\'c1\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'b7\\'d5\\'e8\\'e1\\'a8\\'e9\\'a7\\lang1033\\f1\\par\r\n\\par\r\n\\pard\\ltrpar\\qc\\lang1054\\b\\f0\\'a7\\'d2\\'b9\\'ca\\'d2\\'c3\\'ca\\'b9\\'e0\\'b7\\'c8\\lang1033\\f1\\par\r\n\\lang1054 72152\\lang1033 , \\lang1054 72143\\par\r\n\\b0\\f3\\fs36\\par\r\n\\pard\\ltrpar\\par\r\n}\r\n\u0000",
    "mail_read": "Y",
    "mail_send_datetime": "2012-04-05 08:50:39",
    "mail_read_datetime": null,
    "mail_priority": 0,
    "has_attachment": null,
    "attachment": null,
    "attachment_id": 0,
    "attachment_open": null,
    "hos_guid": null
  },
  {
    "mail_id": 9,
    "mail_from": "chatchawal",
    "mail_recipient": "yuwa001",
    "mail_subject": "เลื่อนนัดตรวจ LAB",
    "mail_body": "{\\rtf1\\fbidis\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fswiss\\fprq2\\fcharset222 TH SarabunPSK;}{\\f1\\fswiss\\fprq2\\fcharset0 TH SarabunPSK;}{\\f2\\froman\\fprq2\\fcharset0 AngsanaUPC;}{\\f3\\fnil\\fcharset222 AngsanaUPC;}}\r\n\\viewkind4\\uc1\\pard\\ltrpar\\b\\f0\\fs28\\'e0\\'c3\\'d7\\'e8\\'cd\\'a7\\lang1033\\f1    \\lang1054\\f0\\'a2\\'cd\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'b5\\'c3\\'c7\\'a8\\lang1033\\f1  LAB\\lang1054  \\par\r\n\\f0\\'e0\\'c3\\'d5\\'c2\\'b9\\lang1033\\f1  \\lang1054\\f0   \\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\'b7\\'d5\\'e8\\'e0\\'a1\\'d5\\'e8\\'c2\\'c7\\'a2\\'e9\\'cd\\'a7\\'b7\\'d8\\'a1\\'b7\\'e8\\'d2\\'b9\\lang1033\\f1\\par\r\n\\pard\\ltrpar\\qj\\b0\\par\r\n\\pard\\ltrpar\\lang1054\\f0            \\'e0\\'b9\\'d7\\'e8\\'cd\\'a7\\'a8\\'d2\\'a1\\lang1033\\f1  \\lang1054\\f0\\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\lang1033\\f1  LAB \\lang1054\\f0\\'c1\\'d5\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'e0\\'b4\\'d4\\'b9\\'b7\\'d2\\'a7\\'e4\\'bb\\'c3\\'d2\\'aa\\'a1\\'d2\\'c3 \\'c3\\'d0\\'cb\\'c7\\'e8\\'d2\\'a7 \\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 22-26 \\'e0\\'c1\\'c9\\'d2\\'c2\\'b9 2555 \\'e1\\'c5\\'d0\\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 16-18 \\'be\\'c4\\'c9\\'c0\\'d2\\'a4\\'c1 2555\\f2\\par\r\n\\pard\\ltrpar\\qj\\f1\\par\r\n\\pard\\ltrpar        \\f0     \\'a8\\'d6\\'a7\\'e0\\'c3\\'d5\\'c2\\'b9\\'c1\\'d2\\'e0\\'be\\'d7\\'e8\\'cd\\'be\\'d4\\'a8\\'d2\\'c3\\'b3\\'d2\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2 \\'cb\\'c3\\'d7\\'cd\\'ca\\'e8\\'a7\\'b5\\'c3\\'c7\\'a8 \\lang1033\\f1 LAB \\lang1054\\f0\\'b9\\'cd\\'a1 \\'b5\\'d2\\'c1\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'b7\\'d5\\'e8\\'e1\\'a8\\'e9\\'a7\\lang1033\\f1\\par\r\n\\par\r\n\\pard\\ltrpar\\qc\\lang1054\\b\\f0\\'a7\\'d2\\'b9\\'ca\\'d2\\'c3\\'ca\\'b9\\'e0\\'b7\\'c8\\lang1033\\f1\\par\r\n\\lang1054 72152\\lang1033 , \\lang1054 72143\\par\r\n\\b0\\f3\\fs36\\par\r\n\\pard\\ltrpar\\par\r\n}\r\n\u0000",
    "mail_read": "N",
    "mail_send_datetime": "2012-04-05 08:50:39",
    "mail_read_datetime": null,
    "mail_priority": 0,
    "has_attachment": null,
    "attachment": null,
    "attachment_id": 0,
    "attachment_open": null,
    "hos_guid": null
  },
  {
    "mail_id": 10,
    "mail_from": "chatchawal",
    "mail_recipient": "yuwa002",
    "mail_subject": "เลื่อนนัดตรวจ LAB",
    "mail_body": "{\\rtf1\\fbidis\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fswiss\\fprq2\\fcharset222 TH SarabunPSK;}{\\f1\\fswiss\\fprq2\\fcharset0 TH SarabunPSK;}{\\f2\\froman\\fprq2\\fcharset0 AngsanaUPC;}{\\f3\\fnil\\fcharset222 AngsanaUPC;}}\r\n\\viewkind4\\uc1\\pard\\ltrpar\\b\\f0\\fs28\\'e0\\'c3\\'d7\\'e8\\'cd\\'a7\\lang1033\\f1    \\lang1054\\f0\\'a2\\'cd\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'b5\\'c3\\'c7\\'a8\\lang1033\\f1  LAB\\lang1054  \\par\r\n\\f0\\'e0\\'c3\\'d5\\'c2\\'b9\\lang1033\\f1  \\lang1054\\f0   \\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\'b7\\'d5\\'e8\\'e0\\'a1\\'d5\\'e8\\'c2\\'c7\\'a2\\'e9\\'cd\\'a7\\'b7\\'d8\\'a1\\'b7\\'e8\\'d2\\'b9\\lang1033\\f1\\par\r\n\\pard\\ltrpar\\qj\\b0\\par\r\n\\pard\\ltrpar\\lang1054\\f0            \\'e0\\'b9\\'d7\\'e8\\'cd\\'a7\\'a8\\'d2\\'a1\\lang1033\\f1  \\lang1054\\f0\\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\lang1033\\f1  LAB \\lang1054\\f0\\'c1\\'d5\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'e0\\'b4\\'d4\\'b9\\'b7\\'d2\\'a7\\'e4\\'bb\\'c3\\'d2\\'aa\\'a1\\'d2\\'c3 \\'c3\\'d0\\'cb\\'c7\\'e8\\'d2\\'a7 \\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 22-26 \\'e0\\'c1\\'c9\\'d2\\'c2\\'b9 2555 \\'e1\\'c5\\'d0\\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 16-18 \\'be\\'c4\\'c9\\'c0\\'d2\\'a4\\'c1 2555\\f2\\par\r\n\\pard\\ltrpar\\qj\\f1\\par\r\n\\pard\\ltrpar        \\f0     \\'a8\\'d6\\'a7\\'e0\\'c3\\'d5\\'c2\\'b9\\'c1\\'d2\\'e0\\'be\\'d7\\'e8\\'cd\\'be\\'d4\\'a8\\'d2\\'c3\\'b3\\'d2\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2 \\'cb\\'c3\\'d7\\'cd\\'ca\\'e8\\'a7\\'b5\\'c3\\'c7\\'a8 \\lang1033\\f1 LAB \\lang1054\\f0\\'b9\\'cd\\'a1 \\'b5\\'d2\\'c1\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'b7\\'d5\\'e8\\'e1\\'a8\\'e9\\'a7\\lang1033\\f1\\par\r\n\\par\r\n\\pard\\ltrpar\\qc\\lang1054\\b\\f0\\'a7\\'d2\\'b9\\'ca\\'d2\\'c3\\'ca\\'b9\\'e0\\'b7\\'c8\\lang1033\\f1\\par\r\n\\lang1054 72152\\lang1033 , \\lang1054 72143\\par\r\n\\b0\\f3\\fs36\\par\r\n\\pard\\ltrpar\\par\r\n}\r\n\u0000",
    "mail_read": "N",
    "mail_send_datetime": "2012-04-05 08:50:39",
    "mail_read_datetime": null,
    "mail_priority": 0,
    "has_attachment": null,
    "attachment": null,
    "attachment_id": 0,
    "attachment_open": null,
    "hos_guid": null
  },
  {
    "mail_id": 11,
    "mail_from": "chatchawal",
    "mail_recipient": "yuwa003",
    "mail_subject": "เลื่อนนัดตรวจ LAB",
    "mail_body": "{\\rtf1\\fbidis\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fswiss\\fprq2\\fcharset222 TH SarabunPSK;}{\\f1\\fswiss\\fprq2\\fcharset0 TH SarabunPSK;}{\\f2\\froman\\fprq2\\fcharset0 AngsanaUPC;}{\\f3\\fnil\\fcharset222 AngsanaUPC;}}\r\n\\viewkind4\\uc1\\pard\\ltrpar\\b\\f0\\fs28\\'e0\\'c3\\'d7\\'e8\\'cd\\'a7\\lang1033\\f1    \\lang1054\\f0\\'a2\\'cd\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'b5\\'c3\\'c7\\'a8\\lang1033\\f1  LAB\\lang1054  \\par\r\n\\f0\\'e0\\'c3\\'d5\\'c2\\'b9\\lang1033\\f1  \\lang1054\\f0   \\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\'b7\\'d5\\'e8\\'e0\\'a1\\'d5\\'e8\\'c2\\'c7\\'a2\\'e9\\'cd\\'a7\\'b7\\'d8\\'a1\\'b7\\'e8\\'d2\\'b9\\lang1033\\f1\\par\r\n\\pard\\ltrpar\\qj\\b0\\par\r\n\\pard\\ltrpar\\lang1054\\f0            \\'e0\\'b9\\'d7\\'e8\\'cd\\'a7\\'a8\\'d2\\'a1\\lang1033\\f1  \\lang1054\\f0\\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\lang1033\\f1  LAB \\lang1054\\f0\\'c1\\'d5\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'e0\\'b4\\'d4\\'b9\\'b7\\'d2\\'a7\\'e4\\'bb\\'c3\\'d2\\'aa\\'a1\\'d2\\'c3 \\'c3\\'d0\\'cb\\'c7\\'e8\\'d2\\'a7 \\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 22-26 \\'e0\\'c1\\'c9\\'d2\\'c2\\'b9 2555 \\'e1\\'c5\\'d0\\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 16-18 \\'be\\'c4\\'c9\\'c0\\'d2\\'a4\\'c1 2555\\f2\\par\r\n\\pard\\ltrpar\\qj\\f1\\par\r\n\\pard\\ltrpar        \\f0     \\'a8\\'d6\\'a7\\'e0\\'c3\\'d5\\'c2\\'b9\\'c1\\'d2\\'e0\\'be\\'d7\\'e8\\'cd\\'be\\'d4\\'a8\\'d2\\'c3\\'b3\\'d2\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2 \\'cb\\'c3\\'d7\\'cd\\'ca\\'e8\\'a7\\'b5\\'c3\\'c7\\'a8 \\lang1033\\f1 LAB \\lang1054\\f0\\'b9\\'cd\\'a1 \\'b5\\'d2\\'c1\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'b7\\'d5\\'e8\\'e1\\'a8\\'e9\\'a7\\lang1033\\f1\\par\r\n\\par\r\n\\pard\\ltrpar\\qc\\lang1054\\b\\f0\\'a7\\'d2\\'b9\\'ca\\'d2\\'c3\\'ca\\'b9\\'e0\\'b7\\'c8\\lang1033\\f1\\par\r\n\\lang1054 72152\\lang1033 , \\lang1054 72143\\par\r\n\\b0\\f3\\fs36\\par\r\n\\pard\\ltrpar\\par\r\n}\r\n\u0000",
    "mail_read": "Y",
    "mail_send_datetime": "2012-04-05 08:50:39",
    "mail_read_datetime": null,
    "mail_priority": 0,
    "has_attachment": null,
    "attachment": null,
    "attachment_id": 0,
    "attachment_open": null,
    "hos_guid": null
  },
  {
    "mail_id": 13,
    "mail_from": "chatchawal",
    "mail_recipient": "yuwa005",
    "mail_subject": "เลื่อนนัดตรวจ LAB",
    "mail_body": "{\\rtf1\\fbidis\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fswiss\\fprq2\\fcharset222 TH SarabunPSK;}{\\f1\\fswiss\\fprq2\\fcharset0 TH SarabunPSK;}{\\f2\\froman\\fprq2\\fcharset0 AngsanaUPC;}{\\f3\\fnil\\fcharset222 AngsanaUPC;}}\r\n\\viewkind4\\uc1\\pard\\ltrpar\\b\\f0\\fs28\\'e0\\'c3\\'d7\\'e8\\'cd\\'a7\\lang1033\\f1    \\lang1054\\f0\\'a2\\'cd\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'b5\\'c3\\'c7\\'a8\\lang1033\\f1  LAB\\lang1054  \\par\r\n\\f0\\'e0\\'c3\\'d5\\'c2\\'b9\\lang1033\\f1  \\lang1054\\f0   \\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\'b7\\'d5\\'e8\\'e0\\'a1\\'d5\\'e8\\'c2\\'c7\\'a2\\'e9\\'cd\\'a7\\'b7\\'d8\\'a1\\'b7\\'e8\\'d2\\'b9\\lang1033\\f1\\par\r\n\\pard\\ltrpar\\qj\\b0\\par\r\n\\pard\\ltrpar\\lang1054\\f0            \\'e0\\'b9\\'d7\\'e8\\'cd\\'a7\\'a8\\'d2\\'a1\\lang1033\\f1  \\lang1054\\f0\\'e0\\'a8\\'e9\\'d2\\'cb\\'b9\\'e9\\'d2\\'b7\\'d5\\'e8\\lang1033\\f1  LAB \\lang1054\\f0\\'c1\\'d5\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'e0\\'b4\\'d4\\'b9\\'b7\\'d2\\'a7\\'e4\\'bb\\'c3\\'d2\\'aa\\'a1\\'d2\\'c3 \\'c3\\'d0\\'cb\\'c7\\'e8\\'d2\\'a7 \\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 22-26 \\'e0\\'c1\\'c9\\'d2\\'c2\\'b9 2555 \\'e1\\'c5\\'d0\\'c7\\'d1\\'b9\\'b7\\'d5\\'e8 16-18 \\'be\\'c4\\'c9\\'c0\\'d2\\'a4\\'c1 2555\\f2\\par\r\n\\pard\\ltrpar\\qj\\f1\\par\r\n\\pard\\ltrpar        \\f0     \\'a8\\'d6\\'a7\\'e0\\'c3\\'d5\\'c2\\'b9\\'c1\\'d2\\'e0\\'be\\'d7\\'e8\\'cd\\'be\\'d4\\'a8\\'d2\\'c3\\'b3\\'d2\\'e3\\'cb\\'e9\\'e0\\'c5\\'d7\\'e8\\'cd\\'b9\\'b9\\'d1\\'b4\\'bc\\'d9\\'e9\\'bb\\'e8\\'c7\\'c2 \\'cb\\'c3\\'d7\\'cd\\'ca\\'e8\\'a7\\'b5\\'c3\\'c7\\'a8 \\lang1033\\f1 LAB \\lang1054\\f0\\'b9\\'cd\\'a1 \\'b5\\'d2\\'c1\\'a1\\'d3\\'cb\\'b9\\'b4\\'a1\\'d2\\'c3\\'b7\\'d5\\'e8\\'e1\\'a8\\'e9\\'a7\\lang1033\\f1\\par\r\n\\par\r\n\\pard\\ltrpar\\qc\\lang1054\\b\\f0\\'a7\\'d2\\'b9\\'ca\\'d2\\'c3\\'ca\\'b9\\'e0\\'b7\\'c8\\lang1033\\f1\\par\r\n\\lang1054 72152\\lang1033 , \\lang1054 72143\\par\r\n\\b0\\f3\\fs36\\par\r\n\\pard\\ltrpar\\par\r\n}\r\n\u0000",
    "mail_read": "N",
    "mail_send_datetime": "2012-04-05 08:50:39",
    "mail_read_datetime": null,
    "mail_priority": 0,
    "has_attachment": null,
    "attachment": null,
    "attachment_id": 0,
    "attachment_open": null,
    "hos_guid": null
  }
]
```
