# `adr_consult_dialog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_consult_dialog_id | int(11) | NO | PRI | 0 |  |  |
| adr_consult_dialog_name | varchar(250) | YES | UNI | NULL |  |  |
| adr_consult_template | longtext | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_consult_dialog_name | adr_consult_dialog_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_consult_dialog_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "adr_consult_dialog_id": 1,
    "adr_consult_dialog_name": "กรณีสงสัยแพ้ยากลุ่ม beta-lactam แบบรุนแรง",
    "adr_consult_template": "\r\n\r\n",
    "hos_guid": null
  },
  {
    "adr_consult_dialog_id": 2,
    "adr_consult_dialog_name": "กรณีสงสัยแพ้ยาเกี่ยวข้องกับ R1 side chain ของ 3rd และ 4th Gen Cephalosporins",
    "adr_consult_template": "\r\n",
    "hos_guid": null
  },
  {
    "adr_consult_dialog_id": 3,
    "adr_consult_dialog_name": "กรณีสงสัยแพ้ยาเกี่ยวขอ้งกับ R1 side chain ของ Cephalexin หรือ Ampicillin หรือ Amoxycillin",
    "adr_consult_template": null,
    "hos_guid": null
  },
  {
    "adr_consult_dialog_id": 4,
    "adr_consult_dialog_name": "กรณีสงสัยแพ้ยากลุ่ม Sulfonamides แบบรุนแรง",
    "adr_consult_template": null,
    "hos_guid": null
  },
  {
    "adr_consult_dialog_id": 5,
    "adr_consult_dialog_name": "กรณีสงสัยแพ้ยากลุ่ม Aromatic anticonvulsants แบบรุนแรง",
    "adr_consult_template": null,
    "hos_guid": null
  },
  {
    "adr_consult_dialog_id": 6,
    "adr_consult_dialog_name": "กรณีสงสัยแพ้ยา NSAIDs แบบ pseudoallergy",
    "adr_consult_template": null,
    "hos_guid": null
  }
]
```
