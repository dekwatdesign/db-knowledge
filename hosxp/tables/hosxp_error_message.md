# `hosxp_error_message`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| error_message_id | int(11) | NO | PRI | 0 |  |  |
| error_title | varchar(250) | YES |  | NULL |  |  |
| error_header | varchar(250) | YES |  | NULL |  |  |
| error_instruction | varchar(250) | YES |  | NULL |  |  |
| error_content | text | YES |  | NULL |  |  |
| error_detail | text | YES |  | NULL |  |  |
| error_footer | text | YES |  | NULL |  |  |
| error_module_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | error_message_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "error_message_id": 1,
    "error_title": "ทดสอบ Error Message",
    "error_header": "Error message Header",
    "error_instruction": "Error Instruction",
    "error_content": "Error content",
    "error_detail": "Error detail",
    "error_footer": "Error Footer <a href=\"http://hosxp.net\">go to website</a>",
    "error_module_name": "Test",
    "hos_guid": null
  },
  {
    "error_message_id": 2,
    "error_title": "ระบบเตือนสำรองข้อมูล",
    "error_header": "ระบบเตือนสำรองข้อมูล",
    "error_instruction": "กรุณาทำการสำรองข้อมูลด้วย",
    "error_content": "ท่านสามารถทำการสำรองข้อมูลได้โดยเลือกเมนู ระบบงานอื่นๆ -> บำรุงรักษาระบบ -> สำรองข้อมูล",
    "error_detail": "เนื่องจากท่านเป็นผู้ดูแลระบบ และ ระบบตรวจพบว่ายังไม่เคยมีการสำรองข้อมูลผ่าน ระบบ HOSxP มาเป็นระยะเวลานานเกิน 1 อาทิตย์ เพื่อความปลอดภัยของข้อมูล กรุณาทำการสำรองข้อมูลโดยด่วน",
    "error_footer": "หากท่านต้องการข้อมูลเพิ่มเติม <a href=\"http://hosxp.net/mediawiki/index.php?title=HOSxP_Wiki:Error_Code_2\">กรุณาคลิกที่นี่</a>",
    "error_module_name": "BACKUP",
    "hos_guid": null
  },
  {
    "error_message_id": 3,
    "error_title": "Database warning",
    "error_header": "Characterset incorrect",
    "error_instruction": "กรุณากำหนดค่าของ MySQL ให้ถูกต้อง",
    "error_content": "ระบบตรวจพบว่าค่า default-character-set ไม่ได้มีค่าเป็น tis620 ซึ่งเป็นค่าที่แนะนำให้กำหนดหากใช้งานระบบ HOSxP ",
    "error_detail": "ท่านสามารถกำหนด ค่าที่ถูกต้องได้โดยเข้าไปแก้ไขที่แฟ้ม c:\\windows\\my.ini (windows) หรือ /etc/my.cnf (linux) เมื่อกำหนดเสร็จแล้วให้ทำการ restart mysql ใหม่",
    "error_footer": "หากท่านต้องการข้อมูลเพิ่มเติม <a href=\"http://hosxp.net/mediawiki/index.php?title=HOSxP_Wiki:Error_Code_3\">กรุณาคลิกที่นี่</a>",
    "error_module_name": "MySQL",
    "hos_guid": null
  },
  {
    "error_message_id": 4,
    "error_title": "Database warning",
    "error_header": "InnoDB warning",
    "error_instruction": "กรุณากำหนดค่าของ MySQL ให้ถูกต้อง",
    "error_content": "ระบบตรวจพบว่าท่านเปิด option have_innodb ของ MySQL แต่ท่านไม่ได้กำหนดตัวเลือก innodb_file_per_table ซึ่งจะมีผลกับประสิทธิภาพในการทำงาน เมื่อมีผู้ใช้งานมากๆ",
    "error_detail": "ท่านสามารถกำหนด ค่าที่ถูกต้องได้โดยเข้าไปแก้ไขที่แฟ้ม c:\\windows\\my.ini (windows) หรือ /etc/my.cnf (linux) เมื่อกำหนดเสร็จแล้วให้ทำการ restart mysql ใหม่\r\n\r\nใน section [mysqld] ให้เพิ่มบรรทัด ที่มีข้อความว่า innode_file_per_table\r\n\r\nตัวอย่าง\r\n\r\n[mysqld]\r\ninnodb_file_per_table\r\n...\r\n...\r\n...\r\n...",
    "error_footer": "หากท่านต้องการข้อมูลเพิ่มเติม <a href=\"http://hosxp.net/mediawiki/index.php?title=HOSxP_Wiki:Error_Code_4\">กรุณาคลิกที่นี่</a>",
    "error_module_name": "MySQL",
    "hos_guid": null
  },
  {
    "error_message_id": 5,
    "error_title": "Replication warning",
    "error_header": "Replication log too big",
    "error_instruction": "กรุณาลบข้อมูลในตาราง replicate_log",
    "error_content": "ระบบตรวจพบว่ามีการเปิดใช้งาน replication ของ HOSxP และพบว่าตารางที่เก็บข้อมูล log มีขนาดใหญ่มาก ",
    "error_detail": "ท่านสามารถลบข้อมูลออกจากตาราง replicate_log ได้โดยใช้คำสั่งดังนี้\r\n\r\ndelete from replicate_log\r\nและ\r\noptimize table replicate_log",
    "error_footer": null,
    "error_module_name": "Replication",
    "hos_guid": null
  },
  {
    "error_message_id": 6,
    "error_title": "System not configured",
    "error_header": "ยังไม่ได้กำหนดค่าการทำงาน",
    "error_instruction": "กรุณากำหนดค่าการทำงานของ HOSxP ก่อนเริ่มต้นใช้งานระบบ",
    "error_content": "ระบบตรวจพบว่าคุณยังไม่ได้กำหนดค่าการทำงานของ HOSxP อาจจะเป็นเพราะคุณเพิ่งจะติดตั้ง HOSxP ใหม่ ",
    "error_detail": "ท่านสามารถเข้าไปกำหนดค่าการทำงานได้จากเมนู Tools -> System Setting",
    "error_footer": "หากท่านต้องการข้อมูลเพิ่มเติม <a href=\"http://hosxp.net/mediawiki/index.php?title=HOSxP_Wiki:Error_Code_6\">กรุณาคลิกที่นี่</a>",
    "error_module_name": "System",
    "hos_guid": null
  },
  {
    "error_message_id": 7,
    "error_title": "No income group",
    "error_header": "กลุ่มค่าใช้จ่ายบางรายการไม่มี income_group",
    "error_instruction": "กรุณากำหนดค่าของ income_group ของหมวดค่ารักษาพยาบาล",
    "error_content": "ระบบตรวจพบว่ามีบางรายการในกลุ่มค่ารักษาพยาบาล ที่ยังไม่ได้กำหนดหมวดค่ารักษาพยาบาล",
    "error_detail": "ท่านสามารถเข้าไปตรวจสอบ กลุ่มและหมวดค่ารักษาพยาบาลได้ที่ เมนู ระบบงานอื่นๆ -> บำรุงรักษาระบบ -> แก้ไขกลุ่มค่ารักษาพยาบาล",
    "error_footer": "หากท่านต้องการข้อมูลเพิ่มเติม <a href=\"http://hosxp.net/mediawiki/index.php?title=HOSxP_Wiki:Error_Code_7\">กรุณาคลิกที่นี่</a>",
    "error_module_name": "System",
    "hos_guid": null
  },
  {
    "error_message_id": 8,
    "error_title": "No pcode",
    "error_header": "บางสิทธิการรักษาไม่มีรหัสมาตรฐาน",
    "error_instruction": "กรุณากำหนดค่าของรหัสมาตรฐานของสิทธิการรักษาให้ถูกต้อง",
    "error_content": "ระบบตรวจพบว่ามีบางสิทธิการรักษาที่ยังไม่ได้กำหนดรหัสมาตรฐาน",
    "error_detail": "ท่านสามารถเข้าไปกำหนดรหัสมาตรฐานของสิทธิการรักษาได้จากเมนู Tools -> System Setting -> สิทธิการรักษา",
    "error_footer": null,
    "error_module_name": "System",
    "hos_guid": null
  }
]
```
