# `dxa_advice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_advice_id | int(11) | YES |  | NULL |  |  |
| dxa_disease_id | int(11) | YES |  | NULL |  |  |
| dxa_advice_text | longtext | YES |  | NULL |  |  |
| dxa_advice_rtf | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dxa_advice_id": 1,
    "dxa_disease_id": 5,
    "dxa_advice_text": "ส่งโรงพยาบาลด่วน\r\n",
    "dxa_advice_rtf": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222 Angsana New;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs32\\'ca\\'e8\\'a7\\'e2\\'c3\\'a7\\'be\\'c2\\'d2\\'ba\\'d2\\'c5\\'b4\\'e8\\'c7\\'b9\\par\r\n\\par\r\n}\r\n",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_advice_id": 1,
    "dxa_disease_id": 4,
    "dxa_advice_text": "ส่งโรงพยาบาลด่วน\r\n",
    "dxa_advice_rtf": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222 Angsana New;}{\\f1\\fnil Angsana New;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs32\\'ca\\'e8\\'a7\\'e2\\'c3\\'a7\\'be\\'c2\\'d2\\'ba\\'d2\\'c5\\'b4\\'e8\\'c7\\'b9\\par\r\n\\f1\\par\r\n}\r\n",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_advice_id": 2,
    "dxa_disease_id": 2,
    "dxa_advice_text": "ส่งโรงพยาบาลด่วน\r\n",
    "dxa_advice_rtf": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222 Angsana New;}{\\f1\\fnil Angsana New;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs32\\'ca\\'e8\\'a7\\'e2\\'c3\\'a7\\'be\\'c2\\'d2\\'ba\\'d2\\'c5\\'b4\\'e8\\'c7\\'b9\\f1\\par\r\n}\r\n",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_advice_id": 3,
    "dxa_disease_id": 3,
    "dxa_advice_text": "ส่งโรงพยาบาลด่วน\r\n",
    "dxa_advice_rtf": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222 Angsana New;}{\\f1\\fnil Angsana New;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs32\\'ca\\'e8\\'a7\\'e2\\'c3\\'a7\\'be\\'c2\\'d2\\'ba\\'d2\\'c5\\'b4\\'e8\\'c7\\'b9\\f1\\par\r\n}\r\n",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_advice_id": 4,
    "dxa_disease_id": 6,
    "dxa_advice_text": "ส่งโรงพยาบาลด่วน\r\n",
    "dxa_advice_rtf": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222 Angsana New;}{\\f1\\fnil Angsana New;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs32\\'ca\\'e8\\'a7\\'e2\\'c3\\'a7\\'be\\'c2\\'d2\\'ba\\'d2\\'c5\\'b4\\'e8\\'c7\\'b9\\f1\\par\r\n}\r\n",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_advice_id": 5,
    "dxa_disease_id": 7,
    "dxa_advice_text": "ส่งโรงพยาบาลด่วน\r\n",
    "dxa_advice_rtf": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222 Angsana New;}{\\f1\\fnil Angsana New;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs32\\'ca\\'e8\\'a7\\'e2\\'c3\\'a7\\'be\\'c2\\'d2\\'ba\\'d2\\'c5\\'b4\\'e8\\'c7\\'b9\\f1\\par\r\n}\r\n",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_advice_id": 6,
    "dxa_disease_id": 8,
    "dxa_advice_text": "ส่งโรงพยาบาลด่วนภายใน 24 ชั่วโมง\r\n",
    "dxa_advice_rtf": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222 Angsana New;}{\\f1\\fnil Angsana New;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs32\\'ca\\'e8\\'a7\\'e2\\'c3\\'a7\\'be\\'c2\\'d2\\'ba\\'d2\\'c5\\'b4\\'e8\\'c7\\'b9\\'c0\\'d2\\'c2\\'e3\\'b9 24 \\'aa\\'d1\\'e8\\'c7\\'e2\\'c1\\'a7\\par\r\n\\f1\\par\r\n}\r\n",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_advice_id": 2,
    "dxa_disease_id": 16,
    "dxa_advice_text": "ส่งโรงพยาบาลด่วนภายใน 3 วัน\r\n",
    "dxa_advice_rtf": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222 Angsana New;}{\\f1\\fnil\\fcharset0 Angsana New;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs32\\'ca\\'e8\\'a7\\'e2\\'c3\\'a7\\'be\\'c2\\'d2\\'ba\\'d2\\'c5\\'b4\\'e8\\'c7\\'b9\\'c0\\'d2\\'c2\\'e3\\'b9 3 \\'c7\\'d1\\'b9\\f1\\par\r\n}\r\n",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
