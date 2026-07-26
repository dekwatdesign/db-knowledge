# `drugitems_ned_reason_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_reason | varchar(250) | NO | PRI |  |  |  |
| claim_control | varchar(10) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_claim_control | claim_control | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | doctor_reason | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "doctor_reason": "A : เกิดอาการมีพึงประสงค์จากยาหรือแพ้ยาที่สามารถใช้ได้ในบัญชียาหลักแห่งชาติ",
    "claim_control": "EA",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "doctor_reason": "B : ผลการรักษาไม่บรรลุตามเป้าหมาย แม้ว่าได้ใช้ยาในบัญชียาหลักแห่งชาติครบตามมาตราฐานการรักษาแล้ว",
    "claim_control": "EB",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "doctor_reason": "C : ไม่มีกลุ่มยาในบัญชียาหลักแอห่งชาติใช้ แต่ผู้ป่วยมีความจำเป็นในการใช้ยานี้ตามข้อบ่งใช้ได้ขึ้นทะเบียนไว้กับสำนักงานคณะกรรมการอาหารและยา",
    "claim_control": "EC",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "doctor_reason": "D : ผู้ป่วยมีภาวะหรือโรคที่ห้ามใช้ยาในบัญชียาหลักแห่งชาติอย่างสมบูรณ์ (Absolute Contraindication) หรือมีข้อห้ามการใช้ยาในบัญชีร่วมกับยาอื่น (Serious Drug Interaction)",
    "claim_control": "ED",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "doctor_reason": "E : ยาในบญชียาหลักแห่งชาติมีราคาแพงกว่า (ในเชิงคุ้มค่า)",
    "claim_control": "EE",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "doctor_reason": "F : ผู้ป่วยแสดงความจำนงต้องการ(เบิกไม่ได้)",
    "claim_control": "EF",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
